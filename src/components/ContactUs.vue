<template>
    <v-layout column wrap class="my-12  " align-center>
        <div class="text-center mb-8 mt-6">
            <h2 class="dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>Location</b></h2>
        </div>
        <div class="mb-10 map-container">
            <gmap-map
                    :center="{lat: 1.304601, lng: 103.772312}"
                    :zoom="16"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%"
            >
                <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                />
            </gmap-map>
        </div>
        <div class="text-center">
            <h2 class="font-weight-bold mb-8 mt-6 dark text--black" style="font-family: Graphik-Bold; font-size: 24px">Have some additional questions? Contact us at <a href="mailto: unicon@nes.org.sg">unicon@nes.org.sg</a>
            </h2>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "ContactUs",
        data() {
            return {
                markers: [
                    {
                        position: {lat: 1.304601, lng: 103.772312}
                    }
                ]
            }
        }
    };
</script>

<style scoped>
    .map-container {
        height: 500px;
        width: 100%;
    }

</style>

