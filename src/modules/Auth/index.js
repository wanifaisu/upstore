class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem("Auth")) || {};
  }
  getToken() {
    return this.user_token.token;
  }
  getUserName() {
    return this.user_token.userName;
  }
  getUserFullName() {
    return this.user_token.firstName + " " + this.user_token.lastName;
  }
  setUserToken(new_token) {
    this.user_token = new_token;
    localStorage.setItem("Auth", JSON.stringify(new_token));
  }
  isAuthenticated() {
    if (this.user_token != undefined && this.user_token.token != null) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this.user_token.token = null;
    localStorage.removeItem("Auth");
    localStorage.removeItem("Carts");
    localStorage.removeItem("Stores");
    localStorage.removeItem("WishList");
    localStorage.removeItem("Products");
    localStorage.removeItem("Customers");
    localStorage.removeItem("Categories");
    localStorage.removeItem("UserDetails");
    localStorage.removeItem("CustomerDetails");
    localStorage.removeItem("RELOAD_CACHE_TIME");
    localStorage.removeItem("UpstoreProperties");
  }
}
export default new Auth();
