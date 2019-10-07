export class CertificateService {
  static $inject = ['$http', '$auth', 'appConst'];

  constructor($http, $auth, appConst) {

    this.$http = $http;
    this.$auth = $auth;
    this.appConst = appConst;
  }

  filterCertificates(limit, page, filter) {
    return new Promise((resolve, reject) => {
      this.$http.post(this.appConst.API + 'certificate/ordered/' + limit + '/' + page, {filter})
        .then(result => {
          resolve(result.data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }

  updateCertificate(certificate) {
    return new Promise((resolve, reject) => {
      this.$http.patch(this.appConst.API + 'certificate/' + certificate._id, certificate)
        .then(result => {
          resolve(result.data);
        }, error => {
          reject(error);
        });
    });
  }

  buyCertificate(certificateId) {
    return new Promise((resolve, reject) => {
      this.$http.post(this.appConst.API + 'order/' + certificateId)
        .then(result => {
          resolve(result.data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }

  cellCertificate(certificateId) {
    return new Promise((resolve, reject) => {
      this.$http.delete(this.appConst.API + 'order/' + certificateId)
        .then(result => {
          resolve(result.data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }

  updateOrder(limit, page, orderedItems) {
    return new Promise((resolve, reject) => {
      this.$http.post(this.appConst.API + 'certificate/updateOrder/' + limit + '/' + page, {orderedItems})
        .then(result => {
          resolve(result.data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }

  delete(certificateId) {
    return new Promise((resolve, reject) => {
      this.$http.delete(this.appConst.API + 'certificate/' + certificateId)
        .then(result => {
          resolve(result.data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }
}
