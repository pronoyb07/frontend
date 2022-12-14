const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    text: {
        required: true,
        type: String
    },
    parsed: {
        required: true,
        type: Array
    },
    hints: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('books', dataSchema)



// {
//   "_id": {
//     "$oid": "6343b7c36a0e624ed6aba54c"
//   },
//   "text": "ARTIFICIAL FLAVOR",
//   "parsed": [],
//   "hints": [
//     {
//       "food": {
//         "foodId": "food_ayp2m1jbkhn38xbretwkzbs6c22h",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_831898",
//         "label": "Cinnamon Bunnies Candies, Cinnamon Flavored Artificially Flavored, Cinnamon Flavored Artificially Flavored",
//         "nutrients": {
//           "ENERC_KCAL": 357,
//           "PROCNT": 0,
//           "CHOCDF": 92.86000061035156
//         },
//         "brand": "Sweet's Quality Candies",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CORN SYRUP; SUGAR; CORN STARCH-MODIFIED; ARTIFICIAL FLAVOR; MINERAL OIL; CAMAUBA WAX; RED #40."
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
//           "label": "Piece"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_bbz5h3ua6z3ikganrjvqubrk1dxm",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_831900",
//         "label": "Cinnamon Santas Candies, Cinnamon Flavored Artificially Flavored, Cinnamon Flavored Artificially Flavored",
//         "nutrients": {
//           "ENERC_KCAL": 361,
//           "PROCNT": 0,
//           "CHOCDF": 94.44000244140625
//         },
//         "brand": "Sweet's Quality Candies",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CORN SYRUP; SUGAR; CORN STARCH-MODIFIED; MINERAL OIL; CARNAUBA WAX; ARTIFICIAL FLAVOR; RED #40."
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
//           "label": "Piece"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_au9lhcebf0jdo3bl66aribwu97h7",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_587675",
//         "label": "Rainbow Artificially Flavored Ice",
//         "nutrients": {
//           "ENERC_KCAL": 118,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 30.59000015258789,
//           "FIBTG": 0
//         },
//         "brand": "Rainbow",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "WATER; CORN SYRUP SOLIDS; SUGAR; NATURAL AND ARTIFICIAL FLAVORS; BLUE #1; RED #40; YELLOW #6; YELLOW #5; CITRIC ACID; CELLULOSE GUM."
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_b1223sdb4domghbvyt4ivaqvq8pe",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_879536",
//         "label": "Glucose Tablets, Orange Naturally & Artificially Flavored, Orange Naturally & Artificially Flavored",
//         "nutrients": {
//           "ENERC_KCAL": 375,
//           "PROCNT": 0,
//           "CHOCDF": 100
//         },
//         "brand": "Reli On",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "DEXTROSE (D-GLUCOSE); CITRIC ACID; MAGNESIUM STEARATE; CELLULOSE; NATURAL & ARTIFICIAL ORANGE FLAVOR; ASCORBIC ACID; FD&C YELLOW #6."
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablet",
//           "label": "Tablet"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_atku8reaz0bnf1bn5jx6hbtpwmgv",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_090478212401_JarritosArtificiallyFlavoredSodaStrawberry",
//         "label": "Jarritos Artificially Flavored Soda, Strawberry",
//         "nutrients": {
//           "ENERC_KCAL": 46.49428121503412,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 11.83490794564505
//         },
//         "brand": "Jarritos",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CARBONATED WATER (WATER; CARBON DIOXIDE); NATURAL SUGAR; CITRIC ACID; ARTIFICIAL FLAVOR; SODIUM BENZOATE (AS A PRESERVATIVE) AND RED 40.",
//         "image": "https://www.edamam.com/food-img/099/099247292f11ca7a1a801cd66fe5d32f.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
//           "label": "Milliliter"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
//           "label": "Fluid ounce"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_adv73slanjuo7abdy9j4pav6paoj",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_INR_FP484906",
//         "label": "Crush - Strawberry Soda. Artificially Flavored.",
//         "nutrients": {
//           "ENERC_KCAL": 22.666666666666668,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 6.133333333333333
//         },
//         "brand": "Crush",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "Carbonated Water; High Fructose Corn Syrup; Citric Acid; Sodium Benzoate; Preservative; Caramel Color; Acacia Gum; Red 40; Artificial Flavors"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_bottle",
//           "label": "Bottle"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_apoeg1dam9gqnubyoybscagzqn0k",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_041303011027_EssentialEverydayGrapeArtificialFlavor",
//         "label": "Essential Everyday Grape Artificial Flavor",
//         "nutrients": {
//           "ENERC_KCAL": 352.9411764705883,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 94.11764705882354
//         },
//         "brand": "Essential Everyday",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "SUGAR; FRUCTOSE; CITRIC ACID (PROVIDES TARTNESS); CONTAINS LESS; THAN 2% OF ASCORBIC ACID (VITAMIN C); VITAMIN E ACETATE; ARTIFICIAL FLAVOR; FOOD STARCH MODIFIED; CALCIUM PHOSPHATE; (PREVENT CAKING); SILICON DIOXIDE; RED 40; BLUE 1.",
//         "image": "https://www.edamam.com/food-img/219/21986850ae0c6f28424565e2b9ea6ec2.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_bt4ctsvbjzxq4jalnyv24baqnktp",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_7705326075338_GuadalupeArtificiallyFlavoredButteredToasts",
//         "label": "Guadalupe Artificially Flavored Buttered Toasts",
//         "nutrients": {
//           "ENERC_KCAL": 416.6666666666667,
//           "PROCNT": 8.333333333333334,
//           "FAT": 8.333333333333334,
//           "CHOCDF": 75,
//           "FIBTG": 8.333333333333334
//         },
//         "brand": "Guadalupe",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "ENRICHED FLOUR; WATER; SUGAR; VEGETABLE SHORTENING; REFINED SALT; YEAST; WHEAT GLUTEN; EMULSIFIERS (MONO AND DIGLYCERIDES); ARTIFICIAL FLAVOR (BUTTER) (SUNFLOWER OIL; PEANUT OIL; NATURAL FLAVORS); ANTIOXIDANT (TBHQ).",
//         "image": "https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cookie",
//           "label": "Cookie"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_adwfptgax0geg9a95kaenbc2i2xg",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_748703100718_GonzalezGelatinNaturallyArtificiallyFlavored",
//         "label": "Gonzalez Gelatin Naturally & Artificially Flavored",
//         "nutrients": {
//           "ENERC_KCAL": 25.252525252525253,
//           "PROCNT": 1.0101010101010102,
//           "FAT": 0,
//           "CHOCDF": 5.050505050505051
//         },
//         "brand": "Gonzalez",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "WATER; SUGAR; GELATIN; CITRIC ACID; NATURAL AND ARTIFICIAL FLAVOR; SODIUM BENZOATE TO PRESERVE FRESHNESS; SALT; SODIUM CITRATE; SUCRALOSE; ACESULFAME POTASSIUM; RED 40; YELLOW 5; BLUE 1; YELLOW 6.",
//         "image": "https://www.edamam.com/food-img/102/1029ac5fc7f2ca63cfa9faef795108df.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_agbeih9au3wyphbz6luu4bvbr44s",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_074323027488_MarinelaCinnamonCookiesArtificiallyFlavored",
//         "label": "Marinela Cinnamon Cookies Artificially Flavored",
//         "nutrients": {
//           "ENERC_KCAL": 500,
//           "PROCNT": 6.666666666666667,
//           "FAT": 20,
//           "CHOCDF": 70,
//           "FIBTG": 0
//         },
//         "brand": "Marinela",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "WHEAT FLOUR; SUGAR; VEGETABLE SHORTENING(PALM AND/OR CANOLA OIL); SODIUM ALUMINIUM SULFATE; MONOCALCIUM PHOSPHATE; CALCIUM CARBONATE; AMMONIUM BICARBONATE; VITAMIN A ACETATE; NIACIN; VITAMIN E ACETATE; RIBOFLAVIN; THIAMIN MONO NITRATE; POTASSIUM IODIDE; FOLIC ACID; FERROUS SULFATE; SOY LECITHIN.",
//         "image": "https://www.edamam.com/food-img/cc9/cc9b73cd197e315acdec833eaec4477f.JPG"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
//           "label": "Piece"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_aywdpzpa8fb8u5br2pfxuangqy1l",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_04782162_JarritosStrawberryArtificiallyFlavoredSoda",
//         "label": "Jarritos Strawberry Artificially Flavored Soda",
//         "nutrients": {
//           "ENERC_KCAL": 46.49428121503412,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 11.83490794564505
//         },
//         "brand": "Jarritos",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CARBONATED WATER (WATER; CARBON DIOXIDE); NATURAL SUGAR; CITRIC ACID; ARTIFICIAL FLAVOR; SODIUM BENZOATE (AS A PRESERVATIVE); CARAMEL COLOR AND RED 40.",
//         "image": "https://www.edamam.com/food-img/6be/6beb32ebdf0887de7b4101bc5bd46cb8.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
//           "label": "Milliliter"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
//           "label": "Fluid ounce"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_a3bqzc8bqixbenaomn3c7b4gvtdu",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_419996",
//         "label": "Tootsie, Fruit Chews, Artificially Flavor",
//         "nutrients": {
//           "ENERC_KCAL": 350,
//           "PROCNT": 0,
//           "FAT": 7.5,
//           "CHOCDF": 72.5,
//           "FIBTG": 0
//         },
//         "brand": "Tootsie",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "SUGAR; CORN SYRUP; PALM OIL; CONDENSED SKIM MILK; WHEY; MALIC ACID; ARTIFICIAL AND NATURAL FLAVORS; SOY LECITHIN; ARTIFICIAL COLORS (INCLUDING FD&C YELLOW 5; RED 40; BLUE 1)."
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
//           "label": "Piece"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_b7qj1p4a7r0ygjahyfy58b07ar04",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_023627550598_SuperAIceCreamArtificiallyFlavor",
//         "label": "Super a Ice Cream Artificially Flavor",
//         "nutrients": {
//           "ENERC_KCAL": 196.96969696969697,
//           "PROCNT": 3.0303030303030303,
//           "FAT": 10.606060606060606,
//           "CHOCDF": 24.242424242424242,
//           "FIBTG": 0
//         },
//         "brand": "Super A",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "MILKFAT AND NONFAT MILK; CORN SYRUP SUGAR; HIGH FRUCTOSE CORN SYRUP; SUGAR; HIGH FRUCTOSE CORN SYRUP; HIGH FRUCTOSE CORN SYRUP; WHEY GUAR GUM; MONO AND DIGLYCERIDES; CALCIUM SULFATE; POLYSORBATE 80; LOCUST BEAN GUM; CELLULOSE GUM; CARRAGENNAN; ARTIFICIAL VANILLA; ANNATTO(COLOR).",
//         "image": "https://www.edamam.com/food-img/ab7/ab75996978d579a0b6b163ea3ffb63ff.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
//           "label": "Cup"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_azoxvy2af0kij1bic5emyb8lza6s",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_18629",
//         "label": "PILLSBURY, Buttermilk Biscuits, Artificial Flavor, Refrigerated Dough",
//         "nutrients": {
//           "ENERC_KCAL": 236,
//           "PROCNT": 6.4,
//           "FAT": 2.79,
//           "CHOCDF": 47.07,
//           "FIBTG": 1.6
//         },
//         "brand": "Pillsbury",
//         "category": "Generic foods",
//         "categoryLabel": "food"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_biscuit",
//           "label": "Biscuit"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_bztrzjpa96nogybyqgj89awx866k",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_029500219330_NehiNehiArtificiallyFlavoredGrapeSodaGrape",
//         "label": "Nehi Nehi Artificially Flavored Grape Soda Grape",
//         "nutrients": {
//           "ENERC_KCAL": 50.721034052764495,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 13.948284364510236
//         },
//         "brand": "Nehi",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CARBONATED WATER; HIGH FRUCTOSE CORN SYRUP; ARTIFICIAL FLAVORS; PHOSPHORIC ACID; CITRIC ACID; POTASSIUM BENZOATE (PRESERVATIVE); RED 40; BLUE 1.",
//         "image": "https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
//           "label": "Milliliter"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
//           "label": "Fluid ounce"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_bo8d4nraja4e55bgiefe8bq0ggyc",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_029500269335_NehiArtificiallyFlavoredPeachSodaPeach",
//         "label": "Nehi Artificially Flavored Peach Soda Peach",
//         "nutrients": {
//           "ENERC_KCAL": 54.947786890494875,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 14.370959648283275
//         },
//         "brand": "Nehi",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CARBONATED WATER; HIGH FRUCTOSE CORN SYRUP; CITRIC ACID; MALIC ACID; POTASSIUM BENZOATE (PRESERVATIVE); POTASSIUM CITRATE; ARTIFICIAL FLAVOR; GUM ACACIA; RED 40.",
//         "image": "https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
//           "label": "Milliliter"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
//           "label": "Fluid ounce"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_akqr5m4bs9pf3maut7b8ia25hzqz",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_021130241958_SafewayRefresheArtificiallyFlavoredSodaGrape",
//         "label": "Safeway Refreshe Artificially Flavored Soda Grape",
//         "nutrients": {
//           "ENERC_KCAL": 59.17453972822525,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 15.216310215829349,
//           "FIBTG": 0
//         },
//         "brand": "Safeway",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "CARBONATED WATER; HIGH FRUCTOSE CORN SYRUP; CITRIC ACID; NATURAL AND ARTIFICIAL FLAVORS; SODIUM BENZOATE(A PRESERVATIVE); POTASSIUM CITRATE; RED 40; BLUE 1.",
//         "image": "https://www.edamam.com/food-img/bda/bda96d138779dc04b4f3d74a9cc149b9.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
//           "label": "Milliliter"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
//           "label": "Fluid ounce"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_b3wsfxebttwtdgabullkvbf197xo",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_INR_FP368521",
//         "label": "Stop & Shop  Artificially Flavored Drink Mix",
//         "nutrients": {
//           "ENERC_KCAL": 312.1294517788219,
//           "PROCNT": 0,
//           "FAT": 0,
//           "CHOCDF": 83.2345204743525
//         },
//         "brand": "The Stop & Shop Supermarket Company",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "Sugar; Fructose; Citric Acid; Provides Tartness; Natural And Artificial Flavor; Calcium Phosphate; Prevents Caking; Cornstarch - Modified; Red 40; Ascorbic Acid; Vitamin C; Blue 1",
//         "image": "https://www.edamam.com/food-img/4e1/4e14e1d2edf886ab99ac28fd684d39d4.jpg"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
//           "label": "Tablespoon"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_bfk43csbb3bw6la0jkh2ba839lky",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_INR_FP858488",
//         "label": "Fiesta Chocolate Syrup Artificially Flavored, 684g",
//         "nutrients": {
//           "ENERC_KCAL": 236.84210526315792,
//           "PROCNT": 2.6315789473684212,
//           "FAT": 0,
//           "CHOCDF": 60.526315789473685,
//           "FIBTG": 2.6315789473684212
//         },
//         "brand": "Fiesta",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "High Fructose Corn Syrup; Sugar; Water; Corn Syrup; Cocoa; Emulfier; Mono - And Diglycerides; Polysorbate 60; Artificial Flavor; Preservtive; Sodium Benzoate; Potassium Sorbate; Salt; Xanthan Gum; Phosphoric Acid",
//         "image": "https://www.edamam.com/food-img/72c/72cc4062e62a28c68e6a4ada6208bb81.png"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
//           "label": "Tablespoon"
//         }
//       ]
//     },
//     {
//       "food": {
//         "foodId": "food_aqn1k5fbb6xm9uao45kfxbx0wb3j",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_EWG_050000532018_CoffeeMateGingerbreadNaturalArtificialFlavors",
//         "label": "Coffee Mate Gingerbread Natural & Artificial Flavors",
//         "nutrients": {
//           "ENERC_KCAL": 500.00000000000006,
//           "PROCNT": 0,
//           "FAT": 25,
//           "CHOCDF": 66.66666666666667
//         },
//         "brand": "Coffee-Mate",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "SUGAR; VEGETABLE OIL (PARTIALLY HYDROGENATE; COCONUT OR PALM KERNEL; HYDROGENATED SOYBEAN); CORN SYRUP SOLIDS; SODIUM CASEINATE (A MILK DERIVATIVE)**; AND LESS THAN 2% OF DIPOTASSIUM PHOSHATE (MODERATES COFFEE ACIDITY); NATURAL AND ARTIFICIAL FLAVORS; MONO- AND DIGLYCERIDES (PREVENTS OIL SEPARATION); SODIUM ALUMINOSILICATE; SALT.",
//         "image": "https://www.edamam.com/food-img/c08/c08ec48f7a2221fa87863d4f90755f6b.jpg"
//       },
//       "measures": [
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//           "label": "Serving"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
//           "label": "Package"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
//           "label": "Gram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
//           "label": "Ounce"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
//           "label": "Pound"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
//           "label": "Kilogram"
//         },
//         {
//           "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon",
//           "label": "Teaspoon"
//         }
//       ]
//     }
//   ],
//   "_links": {
//     "next": {
//       "title": "Next page",
//       "href": "https://api.edamam.com/api/food-database/parser?session=40&app_key=69d004c3e3c5b967261e625baea627fc&app_id=85b409cf&ingr=ARTIFICIAL+FLAVOR"
//     }
//   }
// }