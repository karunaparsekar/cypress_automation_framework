///<reference types="Cypress"/>

describe("Iterate over elements", () => {
    it("Log information about all haircare products", () => {

        //open webstore
        cy.visit("https://automationteststore.com/")

        //go to haircare section
        cy.get("ul[class='nav-pills categorymenu'] a[href*='product/category']")
            .contains('Hair Care')
            .click()

        //iterate through the list of products
        cy.get(".fixed_wrapper .prdocutname").each(($element, index, $list) => {
            cy.log("Indexx : " + index + " element : " + $element.text())
        })


    });

    it("Add specific product to cart", () => {
        //open webstore
        cy.visit("https://automationteststore.com/")

        //go to haircare section
        cy.get("ul[class='nav-pills categorymenu'] a[href*='product/category']")
            .contains('Hair Care')
            .click()

        //iterate through the list of products and click on specific product 
        cy.get(".fixed_wrapper .prdocutname").each(($element, index, $list) => {
            cy.log("Indexx : " + index + " element : " + $element.text())
            if ($element.text() == "Curls to straight Shampoo") {
                cy.wrap($element).click()

            }
        })

        //add specific product to cart
        cy.get(".cart").click()

    });

    it("Validate title of product cart using alias", () => {
        //open webstore
        cy.visit("https://automationteststore.com/")

        //go to haircare section
        cy.get("ul[class='nav-pills categorymenu'] a[href*='product/category']")
            .contains('Hair Care')
            .click()

        //iterate through the list of products and click on specific product 
        cy.get(".thumbnail .pricetag.jumbotron a").eq(0).invoke('attr', 'title').as("cartTitle")
        cy.get("@cartTitle").should('equal', "Add to Cart")

    });


    it.only("Calculate total of non sale items", () => {
        //open webstore
        cy.visit("https://automationteststore.com/")

        //iterate through the list of products and get price for non sale items to calculate total
        let totalPrice = 0;
        cy.get('.thumbnail .pricetag.jumbotron').find('.oneprice').as("itemPrices")
        cy.get('@itemPrices').each(($element, index,$list) => {
            cy.log($element.text().split("$")[1]);
            totalPrice += Number($element.text().split("$")[1]);
        }).then(() => {
            cy.log("total for non sale items is : " + totalPrice);
        })
        

        });
  


        it("Calculate total of sale items and calculate total discount", () => {
            //open webstore
            cy.visit("https://automationteststore.com/")
    
            //iterate through the list of products and get price for non sale items to calculate total
            let oldTotalPrice = 0, newTotalPrice = 0;
            cy.get('.thumbnail .pricetag.jumbotron').find('.priceold').as("oldItemPrices")
            cy.get('.thumbnail .pricetag.jumbotron').find('.pricenew').as("newItemPrices")

            //calculate total  as per the old price
            cy.get('@oldItemPrices').each(($element, index,$list) => {
                cy.log($element.text().split("$")[1]);
                oldTotalPrice += Number($element.text().split("$")[1]);
            }).then(() => {
                cy.log("total for non sale items is : " + oldTotalPrice);
            })

            //calculate total as per the new price
            cy.get('@newItemPrices').each(($element, index,$list) => {
                cy.log($element.text().split("$")[1]);
                newTotalPrice += Number($element.text().split("$")[1]);
            }).then(() => {
                cy.log("total for non sale items post discount is : " + newTotalPrice);
            })

           

        });


        it("Calculate total of non sale items using map ", () => {
            //open webstore
            cy.visit("https://automationteststore.com/")
    
            //iterate through the list of products and get price for non sale items to calculate total
            let totalPrice = 0;
            cy.get('.thumbnail .pricetag.jumbotron').find('.oneprice').as("itemPrice")
           
            //calculate total  as per the old price
            cy.get('@itemPrice').then(($elements) => {
                const priceArray = $elements.map((index, el) => parseFloat(el.innerText.replace('$',''))).get();
                const totalPrice = priceArray.reduce((a,b) => a+ b, 0);
                cy.log("total of the product price " + totalPrice);
            });

           

        });
})