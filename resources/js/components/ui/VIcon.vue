<template>

</template>
    <v-icon name="name"/>
<script>
import {OhVueIcon as VIcon, addIcons} from "oh-vue-icons";
import {FcGoogle} from "oh-vue-icons/icons";
addIcons(FcGoogle);
export default {
    props: {
        name: String,
    },
    components: {
        'v-icon': OhVueIcon
    }
}
</script>
