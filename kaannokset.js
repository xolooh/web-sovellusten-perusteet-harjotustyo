const translations = {
    fi: {
        clothing: "Vaatteet",
        electronics: "Elektroniikka",
        sweets: "Makeiset",
        drinks: "Juomat",
        cart: "Ostoskori",
        All: "kaikki",
        customerService: "Verkkokaupan asiakaspalvelu",
        weekdays: "Arkisin klo 08.00-15.00.",
        contactForm: "Voit myös ottaa yhteytteä alla olevasta lomakkeesta.",
        contactHeading: "Ota yhteyttä",
        nameLabel: "Nimi:",
        emailLabel: "Sähköposti:",
        messageLabel: "Viesti:",
        sendButton: "Lähetä viesti",
        hoodie: "Huppari",
        trustNoOne: "Trust No One - T-paita",
        moneyTshirt: "Money Fast Need T-Paita",
        pewpew: "PEW PEW PEW T-Paita",
        karkki4: "Salmiakki",
        addToCart: "Lisää ostoskoriin",
        Close: "Sulje",
        Pricee: "Kokonaishinta",
        laskuri: "Kävijälaskuri"
    },
    en: {
    clothing: "Clothing",
    electronics: "Electronics",
    sweets: "Sweets",
    drinks: "Drinks",
    cart: "Shopping Cart",
    customerService: "Customer Service",
    weekdays: "Weekdays 08:00 AM - 03:00 PM",
    contactForm: "You can also contact us using the form below.",
    contactHeading: "Contact Us",
    nameLabel: "Name:",
    emailLabel: "Email:",
    messageLabel: "Message:",
    sendButton: "Send Message",
    hoodie: "Hoodie",
    trustNoOne: "Trust No One - T-shirt",
    moneyTshirt: "Money T-shirt",
    pewpew: "PEW PEW PEW T-Shirt",
    karkki4: "salty liquorice",
    addToCart: "Add to Cart",
    Close: "Close",
    Pricee: "Total",
    All: "All",
    laskuri: "Visitor Counter"
  },
  };
  let currentLanguage = 'fi';

  function changeLanguage(language) {
      currentLanguage = language;
      console.log(`Language changed to ${currentLanguage}`);
  }
