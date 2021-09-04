import backTop from "components/content/backTop/backTop.vue";

export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        backTop
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollto(0, 0, 300);
        },
    }

}