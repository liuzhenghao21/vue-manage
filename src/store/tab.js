export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            }
        ],
        currentMenu:null
    },
    mutations: {
        changeCollapse(state) {
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !=='home') {
                state.currentMenu = val;
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        // 删除Tag
        closeTag(state,val) {
            const delTag = state.tabsList.findIndex(item => item.name === val.name);
            if (delTag !== -1) {
                state.tabsList.splice(delTag,1)
            }
        }
    }
}