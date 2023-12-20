<template>
    <div class="scoreView">
        <Scatter :data="data" :options="options" />
    </div>
</template>

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
            borderColor: "#00bd7e",
            backgroundColor: "#00bd7e",
            data: [
                {
                    x: new Date("1970-01-01T02:11:30"),
                    y: 360,
                },
                {
                    x: new Date("1970-01-01T04:20:30"),
                    y: 500,
                },
            ],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            type: "time",
            time: {
                displayFormats: {
                    hour: "hh:mm:ss",
                },
            },
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = "Zeit: ";

                    if (context.parsed.y !== null) {
                        label += context.formattedValue
                            .split(",")[2]
                            .split(" am")[0];
                        label += " Score: ";
                        label += context.parsed.y;
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
            scoresObjects: [
                {
                    id: 1,
                    isFinished: true,
                    gameDuration: "02:11:30",
                    scoreCount: 360,
                    applicationUserId: "287db47c-0d50-4ec3-915b-d61921befe02",
                    applicationUser: null,
                },
                {
                    id: 2,
                    isFinished: true,
                    gameDuration: "04:20:30",
                    scoreCount: 500,
                    applicationUserId: "287db47c-0d50-4ec3-915b-d61921befe02",
                    applicationUser: null,
                },
            ],
            data: data,
            options: options,
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

            return this.scoresObjects;
        },
    },

    async created() {
        this.scores = await this.getScores();

        if (this.scores == null || this.scores.length == 0) {
            data.datasets[0].data = [
                {
                    x: new Date(
                        "1970-01-01T" + this.scoresObjects[0].gameDuration
                    ),
                    y: this.scoresObjects[0].scoreCount,
                },
                {
                    x: new Date(
                        "1970-01-01T" + this.scoresObjects[1].gameDuration
                    ),
                    y: this.scoresObjects[1].scoreCount,
                },
            ];
        } else {
            for (let i = 0; i < this.scores.length; i++) {
                data.datasets[0].data = [
                    {
                        x: new Date(
                            "1970-01-01T" + this.scoresObjects[i].gameDuration
                        ),
                        y: this.scoresObjects[i].scoreCount,
                    },
                ];
            }
        }
    },
};
</script>
