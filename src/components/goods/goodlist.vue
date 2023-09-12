<template>
    <div>
        <div class="upload">
            <div class="text">上传文件</div>
            <input type="file" @change="File" multiple >
        </div>
    </div>
</template>

<script>

export default{
    name:"Goods",
    data() {
        return {
        }
    },
    methods: {
        File(e){
            const files = e.target.files
            console.log(files);
        }
    },
}

</script>

<style lang="less" scoped>
    .upload{
        position:relative;
        width:100%;
        height:20vh;
        border:1px rgb(68, 68, 68) dashed;
        border-radius:1em;
        text-align:center;
        .text{
            position:absolute;
            left:50%;
            bottom:50%;
            font-size:32px;
            font-weight:700;
            color:rgb(185, 185, 185);
            letter-spacing:8px;
        }
        &:hover{
            background-color:rgba(243, 243, 243, 0.319);
            .text{
                color:rgba(185, 185, 185, 0.721);
            }
        }
    }
    input[type="file"]{
        opacity: 0;
        width:100%;
        height:100%;
    }
</style>