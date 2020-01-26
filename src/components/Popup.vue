<template>
    <v-dialog v-model="dialog" max-width="600px" true>
        <v-card>
            <v-card-title>
                <v-img :src="require('../assets/popup.jpg')">
                    <v-text>Happy Chinese New Year</v-text>
                </v-img>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Popup",
        data() {
            return {
                dialog: false
            }
        }
    }
</script>

<style scoped>

</style>