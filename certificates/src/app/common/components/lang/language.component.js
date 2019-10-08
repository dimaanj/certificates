export const languageComponent = {
  template: require('./language.html'),
  controller: class LanguageComponent {
    static $inject = ['$translate', '$localStorage'];

    constructor($translate, $localStorage) {
      this.$translate = $translate;
      this.$localStorage = $localStorage;
    }

    changeLanguage(lang) {
      this.$localStorage.lang = lang;
      this.$translate.use(lang);
    }
  }
};
