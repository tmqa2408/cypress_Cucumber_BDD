// class LinksPage {
//     enterURL() {
//       const url="https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
//       cy.visit(
//         url
//       );
//     }

    
//     verifyPageTitle() {
//         return cy.title().should("eq", "Your Store");
//       }

//     verifyCode(){
//       cy.request('https://ecommerce-playground.lambdatest.io/index.php?route=common/home').then((response) => {
//         expect(response.status).to.eq(200)  
//       })
//       }  
// }
// const linkspage = new LinksPage();
// export default linkspage;  