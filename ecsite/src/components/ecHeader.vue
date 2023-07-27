<template>
    <b-container>
        <b-row>
            <b-col>
                <b-navbar>
                    <b-button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </b-button>
                </b-navbar>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {
        BCol,
        BContainer,
        BNavbar,
        BRow,
    }
    from 'bootstrap-vue';
    export default {
        component: {
            BCol,
            BContainer,
            BNavbar,
            BRow,
        },
    };
</script>
