<template>
    <h2 class="score-heading">Scores von {{ player }}</h2>
    <div class="score-chart">
        <Scatter v-if="!isLoading" :data="data" :options="options" />
    </div>
</template>

<style>
.score-heading {
    display: flex;
    justify-content: center;
    padding-top: 25px;
}

.score-chart {
    margin: auto auto;
    height: 80vh;
}
</style>

<script>
import config from "../../config";
import "chartjs-adapter-moment";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
} from "chart.js";
import { Scatter } from "vue-chartjs";

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
);

const data = {
    datasets: [
        {
            label: "Scores",
            fill: false,
            pointRadius: 4,
            borderColor: "#00bd7e",
            backgroundColor: "#00bd7e",
            data: null,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Zeit [Minuten]",
                color: "#aaa",
            },
            ticks: {
                color: "#aaa",
                callback: function (val) {
                    let value = this.getLabelForValue(val);
                    return value + " min";
                },
            },
            grid: {
                color: "#555",
            },
        },

        y: {
            title: {
                display: true,
                text: "Punkte",
                color: "#aaa",
            },
            beginAtZero: true,
            ticks: {
                color: "#aaa",
            },
            grid: {
                color: "#555",
            },
        },
    },

    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    let time = "Zeit: ";
                    if (context.parsed.x !== null) {
                        let xTime = context.parsed.x;
                        let seconds = (xTime % Math.floor(xTime)) * 60;
                        time += `${parseInt(xTime / 60)}:`;
                        xTime %= 60;
                        time += `${
                            xTime - (xTime % Math.floor(xTime))
                        }:${seconds}`;

                        return time + ` Score: ${context.parsed.y}`;
                    }
                    return label;
                },
            },
        },
    },
};

export default {
    data() {
        return {
            data: data,
            options: options,
            player: "",
            isLoading: true,
            max: 10,
        };
    },

    name: "App",
    components: {
        Scatter,
    },

    methods: {
        async getScores() {
            let token = localStorage.BearerToken;
            let response = await fetch(config.api.url + "/Score/getAll", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Authorization: `Bearer ${token}`,
                    token: token,
                },
            });
            return await response.json();
        },

        parseScore() {
            if (this.scores != null && this.scores.length > 0) {
                data.datasets[0].data = [];
                for (let i = 0; i < this.scores.length; i++) {
                    if (this.max < this.scores[i].scoreCount) {
                        this.max = this.scores[i].scoreCount;
                    }

                    data.datasets[0].data.push({
                        x: this.scores[i].minutes,
                        y: this.scores[i].scoreCount,
                    });
                }

                options.scales.y.max = parseInt(this.max * 1.15);
            }
        },
    },

    async created() {
        this.isLoading = true;
        this.player = localStorage.UserName;
        this.scores = await this.getScores();
        this.parseScore();
        this.isLoading = false;
    },
};
</script>
