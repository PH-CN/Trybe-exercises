const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const adress = `${order.address.street}, No: ${order.address.number}, AP: ${order.address.apartment}`;
  let result = `Olá ${deliveryPerson}, entrega para ${name}, Telefone ${phone}, ${adress}.
-------------`
  console.log(result);
}

customerInfo(order);

const orderModifier = (order) => {
 const newPerson = order.order.delivery.deliveryPerson = 'Luiz Silva';
 const pizzas = (Object.keys(order.order.pizza));
 const drink = order.order.drinks.coke.type;
 const total = order.payment.total = 50;
 const result = `Olá ${newPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${total}.`
 console.log(result);
}

orderModifier(order);