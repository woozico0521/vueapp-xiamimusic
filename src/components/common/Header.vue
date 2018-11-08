<template>
    <div>
        <div class="top">
            <input type="text"/>
            <img src="../../assets/images/listen.png"/>
        </div>
        <div class="down">
            <ul>
                <li>
                    <p>乐库</p>
                    <img src="../../assets/images/common-border.jpg">
                </li>
                <li class="on">
                    <p>推荐</p>
                    <img src="../../assets/images/common-border.jpg">
                </li>
                <li>
                    <p>趴间</p>
                    <img src="../../assets/images/common-border.jpg">
                </li>
                <li>
                    <p>看点</p>
                    <img src="../../assets/images/common-border.jpg">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top{
    width: 100%;
    height: 1rem;
}
.top input{
    width: 80%;
    height: 0.5rem;
    background: url(../../assets/images/search.png)no-repeat;
    background-size: 20px;
    background-position: 2px 2px;
    box-shadow: 0 0 2px #ddd,1px 0 2px #ddd,2px 0 2px #ddd;
    border:none;
    margin: 10px 0 0 10px;
}
.top img{
    width: 0.7rem;
    height: 0.7rem;
    margin:5px 0 0 0 ;
}
.down{
    width: 100%;
    height: 1rem;
}
.down ul{
    width: 90%;
    display: flex;
    align-items: baseline;
    height: 0.84rem;
    border-bottom:1px solid #DCAC9E;
    padding:0 5%;
}
.down ul li{
    width: 10%;
    text-align: center;
    margin:0 2%;
}
.down ul li img{
    width: 100%;
}
.down ul li.on{
    width: 20%;
    font-size: 0.5rem;
}
.down ul li.on img{
    width: 200%;
    margin-top:-0.2rem;
}
</style>
