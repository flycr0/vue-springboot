<template>
  <div class="container">
    <h3>$BBRI</h3>
    <h3>4170</h3>
    <h1> -50 (-1.18%) </h1>
    <div v-if="message" class="alert alert-success">{{ this.message }}</div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
           
            <th>Order</th>
            <th>Lot</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bbribid in bbrimodel" v-bind:key="bbribid.id">
          
            <td>{{ bbribid.bidorder }}</td>
            <td>{{ bbribid.bidlot }}</td>
            <td>{{ bbribid.bidprice }}</td>
            
          </tr>
        </tbody>
      </table>
      
       <table class="table">
        <thead>
          <tr>
           
            <th>Order</th>
            <th>Lot</th>
            <th>Offer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bbrioffer in bbrimodel" v-bind:key="bbrioffer.id">
          
            <td>{{ bbrioffer.offerorder }}</td>
            <td>{{ bbrioffer.offerlot }}</td>
            <td>{{ bbrioffer.offerprice }}</td>
            
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>
import UserDataService from "../service/UserDataService";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      message: "",
    };
  },
  methods: {
   
   CreateBidPrice() {
      this.$router.push(`/bbribid`);
    },
    GetBidById(id) {
      this.$router.push(`/bbribid/${id}`);
    },

     CreateOfferPrice() {
      this.$router.push(`/bbrioffer`);
    },
   GetOfferById(id) {
      this.$router.push(`/bbrioffer/${id}`);
    },
   
    },
  
};
</script>
