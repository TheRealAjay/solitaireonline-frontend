<template>
    <div class="score__page">
        <h2 class="score__page__heading">Scores von {{ player }}</h2>
        <div class="score__page__chart">
            <div class="score__page__chart__bar">
                <Bar
                    v-if="!isLoading"
                    :data="dataScore"
                    :options="optionsScore"
                />
            </div>
            <div class="score__page__chart__bar score__page__chart__time">
                <Bar
                    v-if="!isLoading"
                    :data="dataTime"
                    :options="optionsTime"
                />
            </div>
        </div>
    </div>
</template>

<style>
.score__page {
    padding: 0 20px;
}

.score__page__heading {
    display: flex;
    justify-content: center;
    padding-top: 25px;
}

.score__page__chart {
    margin: auto auto;
    height: 80vh;
}

.score__page__chart__bar {
    height: calc(40vh - 10px);
}

.score__page__chart__time {
    margin-top: 20px;
}
</style>

<script>
import config from "../../config";
import "chartjs-adapter-moment";
import {
    Chart as ChartJS,
    LinearScale,
    Tooltip,
    Legend,
    TimeScale,
    CategoryScale,
    BarElement,
} from "chart.js";
import { Scatter } from "vue-chartjs";
import { Bar } from "vue-chartjs";

ChartJS.register(
    LinearScale,
    Tooltip,
    Legend,
    TimeScale,
    CategoryScale,
    BarElement
);

const dataScore = {
    labels: null,
    datasets: [
        {
            label: "Punkte",
            backgroundColor: [],
            borderColor: [],
            data: null,
        },
    ],
};

const dataTime = {
    labels: null,
    datasets: [
        {
            label: "Zeit",
            backgroundColor: [],
            borderColor: [],
            data: null,
        },
    ],
};

const optionsScore = {
    type: "bar",
    responsive: true,
    maintainAspectRatio: false,
    data: dataScore,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const optionsTime = {
    type: "bar",
    data: dataTime,
    responsive: true,
    maintainAspectRatio: false,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },

    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    let time = "Zeit: ";
                    if (context.parsed.x !== null) {
                        let xTime = context.parsed.y;
                        let seconds = (xTime % Math.floor(xTime)) * 60;
                        time += `${parseInt(xTime / 60)}:`;
                        xTime %= 60;
                        time += `${xTime - (xTime % Math.floor(xTime))}:${
                            Math.round(seconds * 100) / 100
                        }`;
                    }
                    return time;
                },
            },
        },
    },
};

export default {
    data() {
        return {
            dataScore: dataScore,
            dataTime: dataTime,
            optionsScore: optionsScore,
            optionsTime: optionsTime,
            player: "",
            isLoading: true,
        };
    },

    name: "ScoreView",
    components: {
        Bar,
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
                dataScore.datasets[0].data = [];
                dataScore.labels = [];
                dataTime.datasets[0].data = [];
                dataTime.labels = [];
                for (let i = 0; i < this.scores.length; i++) {
                    dataScore.labels.push("Spiel " + (i + 1));
                    dataScore.datasets[0].data.push(this.scores[i].scoreCount);
                    dataScore.datasets[0].backgroundColor.push("#00bd7e");
                    dataScore.datasets[0].borderColor.push("#0f0");
                    dataTime.labels.push("Spiel " + (i + 1));
                    dataTime.datasets[0].data.push(this.scores[i].minutes);
                    dataTime.datasets[0].backgroundColor.push("#007dae");
                    dataTime.datasets[0].borderColor.push("#00f");
                }
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
