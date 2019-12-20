<template>
    <!--<v-bottom-sheet v-model="sheet" inset eager>-->
        <!--<template v-slot:activator="{ on }">-->
            <v-layout column wrap class="my-12" align-center>
                <div class="text-center">
                    <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>Agenda</b></h2>
                </div>
                <div class="text-center" justify="center" style="top: 50%">
                    <h2 class="dark black--text" style="font-family: Graphik-Bold; font-size: 48px"><b>Coming Soon!</b></h2>
                </div>
            </v-layout>
</template>

<script>
    export default {
        name: "CurrentEvent",
        data: () => ({
            sheet: false,
            items: [
                {
                    color: "indigo",
                    icon: "mdi-microphone-outline",
                    time: "08:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-outline",
                    time: "09:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-airballoon",
                    time: "10:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-buffer",
                    time: "11:00"
                }
            ]
        })
    };
</script>