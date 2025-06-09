const products = [
  {
    id: 101,
    name: "Sony LED 40 inch",
    category: "Electronics",
    brand: "Sony",
    sku: "SONY-LED-40",
    description: "40 inch Full HD LED TV with smart features.",
    isActive: true,
    createdAt: "2021-01-15",
    updatedAt: "2022-10-22",
    tags: ["LED", "Smart TV", "HD"],
    supplier: {
      name: "ElectroHouse",
      contact: "support@electrohouse.com"
    },
    variations: [
      {
        id: 1,
        color: "Black",
        price: 50000,
        quantity: 5,
        warranty: "2 years",
        discount: 0,
        isAvailable: true
      },
      {
        id: 2,
        color: "Red",
        price: 50000,
        quantity: 1,
        warranty: "2 years",
        discount: 5,
        isAvailable: true
      },
      {
        id: 3,
        color: "Silver",
        price: 55000,
        quantity: 8,
        warranty: "3 years",
        discount: 10,
        isAvailable: false
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "Ahmad",
          email: "ahmad@gmail.com",
          location: "Lahore"
        },
        rating: 4.0,
        title: "Good Product",
        comment: "Very good product for the price.",
        date: "2021-02-06",
        approved: true,
        likes: 2,
        verifiedPurchase: true
      },
      {
        id: 2,
        user: {
          name: "Zubair",
          email: "zubair@yahoo.com",
          location: "Karachi"
        },
        rating: 4.5,
        title: "Awesome",
        comment: "I’m impressed by the quality.",
        date: "2021-02-05",
        approved: false,
        likes: 5,
        verifiedPurchase: false
      }
    ]
  }
];
  //Task no 1

products.forEach(product => {
  console.log(`Product Name: ${product.name}`);
  console.log(`Supplier Name: ${product.supplier.name}`);
  console.log(`Supplier Contact: ${product.supplier.contact}`);
  console.log('-----------------------------');
});

//Task no 2

const availableColors = products
  .filter(product => product.isActive) // Filter active products
  .map(product =>
    product.variations
      .filter(variation => variation.isAvailable) // Filter available variations
      .map(variation => variation.color) // Extract color
  )
  .reduce((acc, colors) => acc.concat(colors), []); // Flatten the array

console.log(availableColors);


//Task no 3

const totalAvailableQuantity = products
  .map(product => {
    return product.variations
      .filter(variation => variation.isAvailable)     
      .map(variation => variation.quantity)          
      .reduce((sum, qty) => sum + qty, 0);            
  })
  .reduce((total, qty) => total + qty, 0);            
console.log(totalAvailableQuantity);


//Task no 4

var discountedProducts = products.filter(product =>
  product.variations.some(variation => variation.discount > 0)
);
discountedProducts.forEach(product => {
  console.log(`Product Name: ${product.name}`);
});

//Task no 5

var productEffectivePrices = products.map(({ name, variations }) => {
  const variationDetails = variations.map(({ color, price, discount }) => {
    const effectivePrice = price * (1 - discount / 100);
    return { color, price, discount, effectivePrice };
  });
  return {
    productName: name,
    variations: variationDetails
  };
});

productEffectivePrices.forEach(({ productName, variations }) => {
  console.log(`Product: ${productName}`);
  variations.forEach(({ color, price, discount, effectivePrice }) => {
    console.log(`- ${color}: Original = ${price}, Discount = ${discount}%, Effective = ${effectivePrice}`);
  });
  console.log('-------------------------');
});

//Task no 6
let highestDiscountVariation = null;

products.forEach(product => {
  product.variations.forEach(variation => {
    if (
      !highestDiscountVariation ||
      variation.discount > highestDiscountVariation.discount
    ) {
      highestDiscountVariation = variation;
    }
  });
});

console.log(highestDiscountVariation);

//Task no 7

var emails = products
  const emails = products
  .map(product => {
    return product.reviews
      .filter(review => review.approved && review.likes > 3) 
      .map(review => review.user.email);                    
  })
  .reduce((acc, emails) => acc.concat(emails), []);        

console.log(emails);


//Task no 8

const verifiedReviewCount = products
  .map(product => {
    return product.reviews
      .filter(review => review.verifiedPurchase)  
      .length;                               
  })
  .reduce((total, count) => total + count, 0);   

console.log(verifiedReviewCount);

//Task no 9

var newVariation = {
  id: 4,             
  color: "Blue",     
  price: 52000,     
  quantity: 10,       
  warranty: "2 years",
  discount: 0,
  isAvailable: true
};
var productToUpdate = products.find(product => product.id === 101);
if (productToUpdate) {
  productToUpdate.variations.push(newVariation);
  console.log("New variation added:", newVariation);
} else {
  console.log("Product not found");
}

//Task no 10

var newReview = {
  id: 3,  
  user: {
    name: "Sara",
    email: "sara@example.com",
    location: "Islamabad"
  },
  rating: 5.0,
  title: "Excellent TV",
  comment: "Loving the picture quality and smart features!",
  date: "2025-06-01",
  approved: true,
  likes: 0,
  verifiedPurchase: true
};
var productToUpdate =products.find(product => product.id === 101);
if (productToUpdate) {
  productToUpdate.reviews.push(newReview);
  console.log("New review added:", newReview);
} else {
  console.log("Product not found");
}

//Task no 11

var sortedProducts = products.slice().sort((a, b) => 
  new Date(b.updatedAt) - new Date(a.updatedAt)
);
console.log("Products sorted by latest updatedAt date:");
sortedProducts.forEach(product => {
  console.log(`${product.name} - Updated At: ${product.updatedAt}`);
});
//Task no 12

var filteredProducts = products.filter(product => 
  product.isActive &&
  product.variations.some(variation => variation.isAvailable && variation.quantity > 0)
);

console.log("Filtered Products:");
filteredProducts.forEach(product => {
  console.log(`${product.name}`);
});

//Task no 13


var productSummaries = products.map(product => {
  var totalStock = product.variations.reduce((sum, v) => sum + v.quantity, 0);
  var approvedReviews = product.reviews.filter(r => r.approved);
var avgRating = approvedReviews.length > 0
    ? approvedReviews.reduce((sum, r) => sum + r.rating, 0) / approvedReviews.length
    : 0;
  return {
    name: product.name,
    totalStock,
    avgRating: parseFloat(avgRating.toFixed(2)), 
    supplierContact: product.supplier.contact
  };
});
console.log(productSummaries);

//Task no 14

function getSupplierProductCount(products) {
  return products.reduce((report, product) => {
    var supplierName = product.supplier?.name || "Unknown Supplier";
    if (!report[supplierName]) {
      report[supplierName] = 0;
    }
    report[supplierName] += 1;
    return report;
  }, {});
};
var supplierReport = getSupplierProductCount(products);
console.log("Supplier Product Counts:", supplierReport);

//Task no 15

var productsReviewedByLahoreUsers = products.filter(product =>
  product.reviews.some(review => review.user.location === "Lahore")
);

console.log("Products reviewed by users from Lahore:");
productsReviewedByLahoreUsers.forEach(product => {
  console.log(product.name);
});
//Task no 16


var productsWithAvgRating = products
  .map(product => {
    const approvedReviews = product.reviews.filter(r => r.approved);
    const reviewCount = approvedReviews.length;

    if (reviewCount < 2) return null; // skip if less than 2 reviews

    var avgRating = approvedReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount;

    return {
      name: product.name,
      avgRating,
      reviewCount
    };
  })
  .filter(Boolean) // remove nulls
  .sort((a, b) => b.avgRating - a.avgRating) // descending order
  .slice(0, 3);

console.log("Top 3 Products by Average Rating (min 2 reviews):");
productsWithAvgRating.forEach(({ name, avgRating, reviewCount }) => {
  console.log(`${name} - Avg Rating: ${avgRating.toFixed(2)} (${reviewCount} reviews)`);
});
//Task no 17


var inconsistentProducts = products.filter(product =>
  product.variations.some(variation => variation.isAvailable && variation.quantity === 0)
);

console.log("Products with variations having zero quantity but marked available:");
inconsistentProducts.forEach(product => {
  console.log(product.name);
});
//Task no 18

var allTags = products.flatMap(product => product.tags);
var uniqueTags = [...new Set(allTags)];
console.log("Unique tags across all products:", uniqueTags);
