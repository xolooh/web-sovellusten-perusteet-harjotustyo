var shoppingCart = (function () {
      cart = [];
      function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }

    function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
    }
    var obj = {};

    obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
    if (cart[item].name === name) {
    cart[item].count++;
    saveCart();
    return;
    }}
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
    }

    obj.setCountForItem = function (name, count) {
    for (var i in cart) {
    if (cart[i].name === name) {
    cart[i].count = count;
    break;
    }}};

    obj.removeItemFromCart = function (name) {
    for (var item in cart) {
    if (cart[item].name === name) {
    cart[item].count--;
    if (cart[item].count === 0) {
    cart.splice(item, 1);
    }
    break;
    }}
    saveCart();
    }

    obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
    if (cart[item].name === name) {
    cart.splice(item, 1);
    break;
    }}
    saveCart();
    }

    obj.clearCart = function () {
    cart = [];
    saveCart();
    }

    obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
    totalCount += cart[item].count;
    }
    return totalCount;
    }

    obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
    totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
    }

    obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
    item = cart[i];
    itemCopy = {};
    for (p in item) {
    itemCopy[p] = item[p];
    }
    itemCopy.total = Number(item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy)
    }
    return cartCopy;
    }
    return obj;
    })();


    $('.default-btn').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });

  $('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
  });


  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>"
        + "<td>(" + cartArray[i].price + "€)</td>"
        + "<td><div class='input-group'>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "</div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = "
        + "<td>" + cartArray[i].total + "</td>"
        + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }


  $('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })

  $('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  displayCart();

$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
    var tab = $(this).closest('.tab'), 
    index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    g.preventDefault();
});

$('#search_field').on('keyup', function() {
  var value = $(this).val();
  var patt = new RegExp(value, "i");

  $('.tab_content').find('.col-lg-3').each(function() {
    var $table = $(this);
    
    if (!($table.find('.tuote').text().search(patt) >= 0)) {
      $table.not('.tuote').hide();
    }
    if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
      $(this).show();
      document.getElementById('not_found').style.display = 'none';
    } else {
      document.getElementById("not_found").innerHTML = " Product not found..";
      document.getElementById('not_found').style.display = 'block';
    }
  });
});