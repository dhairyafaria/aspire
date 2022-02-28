<template>
    <div class="nav">
        <router-link to="/home" class="router-link">
            <img class="image" src="../assets/Logo.svg" alt="logo"/>
            <div class="label">Home</div>
        </router-link>
        <router-link to="/cards" class="router-link">
            <img class="image" src="../assets/Cards.svg" alt="cards"/>
            <div class="label">Cards</div>
        </router-link>
        <router-link to="/payments" class="router-link">
            <img class="image" src="../assets/Payment.svg" alt="payments"/>
            <div class="label">Payments</div>
        </router-link>
        <router-link to="/credit" class="router-link">
            <img class="image" src="../assets/Credit.svg" alt="credit"/>
            <div class="label">Credit</div>
        </router-link>
        <router-link to="/profile" class="router-link">
            <img class="image" src="../assets/Profile.svg" alt="profile"/>
            <div class="label">Profile</div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
    .nav {
        padding: 6px 0px;
        height: 50px;
        display: flex;
        text-align: center;
        background-color: #ffffff;
        -webkit-box-shadow: 0px -3px 6px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px -3px 6px 0px rgba(0,0,0,0.2);
        box-shadow: 0px -3px 6px 0px rgba(0,0,0,0.2);
        .router-link {
            text-decoration: none;
            flex: auto;
            .image {
                height: 24px;
                width: 24px;
            }
            .label {
                color: #DDDDDD;
                font-family: 'Open Sans';
                font-weight: 700;
                font-size: 9px;
                &:hover,:active {
                    color: #01D167;
                }
            }
        }
    }
</style>
