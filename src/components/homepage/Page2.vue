<template>
    <div class="page2">
        <CardMini :key="idx" v-for="(i, idx) in dataList" :title=i.workTitle :auth="i.makerName" :avatar=i.makerAvatar
            :hot=i.views :cover=i.coverFile @click="$router.push({
                path: '/WorkDetail',
                query: { workId: i.workId }
            })"></CardMini>
    </div>
</template>

<script>
import CardMini from '@/components/Card/CardMini.vue'
import bus from '@/utils/mitt'
import { getSrc, uploadFile, } from '@/api/file'
import { getAllWorks, } from '@/api/work'
import pubuse from '@/utils/pub-use'
export default {
    name: 'page2',
    props: {
        loadMore: {
            default: false,
            type: Boolean,
        }
    },
    components: [
        CardMini
    ],
    inject: ['globalData'],
    data() {
        return {
            loading: false,
            tabIdx: 0,
            dataList: [],
            pageNum: 1,
            pageSize: 10,
        }
    },
    computed: {
        contestId() {
            return this.globalData.contestId
        }
    },
    watch: {
        loadMore(to) {
            if (this.tabIdx == 1 && to) {
                if (!this.loading) {
                    this.loading = true
                    // loadmore here
                    getAllWorks({
                        contestId: this.globalData.contestId,
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                    }).then(v => {
                        // console.log(v)
                        if (!v.code) {
                            this.dataList = this.dataList.concat(v.data)
                            v.data.forEach(ele => {
                                this.replaceBlob(ele, ['coverFile'])
                            });
                            this.pageNum++;
                        }
                        this.loading = false
                    })


                }
            }
        },
        contestId(to) {
            // alert('contestId改变'+to)
            // 初始化
            this.pageNum = 1
            this.loading = false
            if (to !== -1) {
                // alert('page2 reload'+this.globalData.contestId)
                this.loading = true
                getAllWorks({
                    contestId: this.globalData.contestId,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                }).then(v => {
                    // console.log(v)
                    if (!v.code) {
                        this.dataList = v.data
                        v.data.forEach(ele => {
                            this.replaceBlob(ele, ['coverFile'])
                        });
                        this.pageNum++;
                    }
                    this.loading = false
                })
            }
        },
        dataList() {

        }
    },
    methods: {
        replaceBlob(tarObject, attrList) {
            // console.log(attrList)
            attrList.forEach(attr => {
                getSrc(tarObject[attr]).then(v => {
                    // console.log(v)
                    tarObject[attr] = v
                    this.$forceUpdate()
                })
                // .catch(err => {
                //     ElMessage.error('图片加载失败')
                // })
                tarObject[attr] = pubuse('loading.gif')
                // console.log(this.dataList)
            });
        }
    },
    mounted() {
        bus.on('need-tab-idx', (ls) => {
            // 11451要和需要谁的id对应
            if (ls[1] == 11451) {
                this.tabIdx = ls[0]
            }
        })



    },

}
</script>


<style scoped>
.page2 {
    width: 100%;
    min-height: 300px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #fff;
}
</style>