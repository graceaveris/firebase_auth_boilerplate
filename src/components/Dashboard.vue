<template>
    <div>
        <div>You've made it inside!</div>
        <p>name: {{userProfile.name}}</p>
        <p>email: {{userProfile.email}}</p>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['userProfile'])
    },
}
</script>