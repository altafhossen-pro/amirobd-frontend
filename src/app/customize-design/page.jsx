'use client';
import { useState } from "react";
import { Check, ArrowLeft, Upload, X } from "lucide-react";

export default function CustomizeProduct() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  
  // File uploads for front and back
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  
  // Customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  
  // Custom design notes
  const [designNotes, setDesignNotes] = useState("");
  
  // Delivery slot (5-6 days premium or 10-14 days regular)
  const [deliverySlot, setDeliverySlot] = useState("regular"); // "premium" or "regular"

  // 🎯 PRODUCT CONFIGURATION - SET YOUR IMAGE SOURCES HERE
  const PRODUCT_CONFIG = {
    "T-Shirt": {
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 450,
      imageSrc: {
        Black: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        White: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      }
    },
    Polo: {
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 650,
      imageSrc: {
        Black: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80",
        White: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80",
      }
    },
    Hoodie: {
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 1200,
      imageSrc: {
        Black: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
        White: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      }
    },
    Jersey: {
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 850,
      imageSrc: {
        Black: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&q=80",
        White: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&q=80",
      }
    },
  };

  const currentProduct = category ? PRODUCT_CONFIG[category] : null;
  const currentImageSrc = currentProduct ? currentProduct.imageSrc[color] : null;

  // Handle file upload
  const handleFileUpload = (e, position) => {
    const file = e.target.files[0];
    if (file) {
      if (position === "front") {
        setFrontFile(file);
      } else {
        setBackFile(file);
      }
    }
  };

  // Remove uploaded file
  const removeFile = (position) => {
    if (position === "front") {
      setFrontFile(null);
    } else {
      setBackFile(null);
    }
  };

  // Calculate total price with delivery premium
  const calculateTotal = () => {
    const basePrice = currentProduct.price * quantity;
    const deliveryPremium = deliverySlot === "premium" ? basePrice * 0.30 : 0;
    return (basePrice + deliveryPremium).toFixed(2);
  };

  // Handle order submission
  const handlePlaceOrder = () => {
    // Validation
    if (!frontFile && !backFile) {
      alert("Please upload at least one design file (Front or Back)");
      return;
    }
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert("Please fill in all customer information fields");
      return;
    }

    // Here you would submit the order
    console.log({
      category,
      color,
      size,
      quantity,
      frontFile,
      backFile,
      designNotes,
      customerInfo,
      deliverySlot,
      totalPrice: calculateTotal()
    });
    
    alert("Order placed successfully!");
  };

  /* ================= STEP 1: CATEGORY SELECTION ================= */
  if (step === 1) {
    return (
      <div className="min-h-screen bg-slate-50 py-6 px-3">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              Design Your Product
            </h1>
            <p className="text-sm text-slate-600">
              Choose from our premium collection
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(PRODUCT_CONFIG).map(([cat, config]) => (
              <div
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setColor(config.colors[0]);
                  setStep(2);
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={config.imageSrc.Black}
                      alt={cat}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {cat}
                    </h3>
                    <p className="text-lg font-bold text-blue-600">
                      ৳{config.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ================= STEP 2: CUSTOMIZATION ================= */
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition text-sm"
            >
              <ArrowLeft size={16} />
              <span className="font-medium">Back</span>
            </button>
            <div className="text-right">
              <h2 className="text-lg font-bold text-slate-900">{category}</h2>
              <p className="text-xs text-slate-500">Customize your design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 py-4">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* LEFT: Product Preview */}
          <div className="lg:sticky lg:top-20 h-fit col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 mb-3">
                {/* Static Image Preview - Changes based on selected color */}
                <img
                  src={currentImageSrc}
                  alt={`${category} - ${color}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Summary */}
              <div className="space-y-2 p-3 bg-slate-50 rounded-lg text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Color:</span>
                  <span className="font-semibold">{color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Size:</span>
                  <span className="font-semibold">{size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Quantity:</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Delivery:</span>
                  <span className="font-semibold text-xs">
                    {deliverySlot === "premium" ? "5-6 Days" : "10-14 Days"}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600">Base Price:</span>
                    <span>৳{(currentProduct.price * quantity).toFixed(2)}</span>
                  </div>
                  {deliverySlot === "premium" && (
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">Premium Delivery:</span>
                      <span className="text-orange-600">+৳{(currentProduct.price * quantity * 0.30).toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-base font-bold">Total:</span>
                  <span className="text-xl font-bold text-blue-600">
                    ৳{calculateTotal()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Customization Options */}
          <div className="space-y-3 col-span-2">
            {/* Color Selection */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Select Color
              </h3>
              <div className="flex gap-3">
                {currentProduct.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`relative flex-1 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                      color === c
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    } ${c === 'Black' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
                  >
                    {color === c && (
                      <Check size={14} className={`absolute top-1 right-1 ${c === 'Black' ? 'text-white' : 'text-blue-600'}`} />
                    )}
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Select Size
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {currentProduct.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-2 rounded-lg font-bold text-sm transition-all ${
                      size === s
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-lg"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 text-center text-lg font-bold border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Design File Upload */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Upload Design File <span className="text-red-500">*</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Front Design Upload */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-2">
                    Front Design
                  </label>
                  {!frontFile ? (
                    <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <Upload size={24} className="text-slate-400 mb-1" />
                      <span className="text-xs text-slate-500">Click to upload</span>
                      <input
                        type="file"
                        accept="image/*,.pdf,.ai,.psd"
                        onChange={(e) => handleFileUpload(e, "front")}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="relative h-32 border-2 border-green-500 rounded-lg p-2 bg-green-50">
                      <button
                        onClick={() => removeFile("front")}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={12} />
                      </button>
                      <p className="text-xs font-medium text-slate-900 truncate">{frontFile.name}</p>
                      <p className="text-xs text-slate-500">{(frontFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  )}
                </div>

                {/* Back Design Upload */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-2">
                    Back Design (Optional)
                  </label>
                  {!backFile ? (
                    <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <Upload size={24} className="text-slate-400 mb-1" />
                      <span className="text-xs text-slate-500">Click to upload</span>
                      <input
                        type="file"
                        accept="image/*,.pdf,.ai,.psd"
                        onChange={(e) => handleFileUpload(e, "back")}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="relative h-32 border-2 border-green-500 rounded-lg p-2 bg-green-50">
                      <button
                        onClick={() => removeFile("back")}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={12} />
                      </button>
                      <p className="text-xs font-medium text-slate-900 truncate">{backFile.name}</p>
                      <p className="text-xs text-slate-500">{(backFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-xs text-slate-500 mt-2">
                Supported formats: JPG, PNG, PDF, AI, PSD (Max 10MB)
              </p>
            </div>

            {/* Design Notes */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Design Notes (Optional)
              </h3>
              <textarea
                value={designNotes}
                onChange={(e) => setDesignNotes(e.target.value)}
                placeholder="Describe your design requirements, color preferences, placement instructions, or any special requests..."
                className="w-full h-24 p-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm resize-none"
              />
            </div>

            {/* Delivery Time Selection */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Delivery Time <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {/* Premium Delivery */}
                <button
                  onClick={() => setDeliverySlot("premium")}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    deliverySlot === "premium"
                      ? "border-orange-500 bg-orange-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">Premium</span>
                    {deliverySlot === "premium" && (
                      <Check size={16} className="text-orange-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mb-1">5-6 Working Days</p>
                  <p className="text-xs font-bold text-orange-600">+30% Extra</p>
                </button>

                {/* Regular Delivery */}
                <button
                  onClick={() => setDeliverySlot("regular")}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    deliverySlot === "regular"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">Regular</span>
                    {deliverySlot === "regular" && (
                      <Check size={16} className="text-blue-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mb-1">10-14 Working Days</p>
                  <p className="text-xs font-bold text-blue-600">Standard Price</p>
                </button>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Customer Information <span className="text-red-500">*</span>
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full p-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full p-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="01XXXXXXXXX"
                      className="w-full p-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    placeholder="Enter your complete delivery address"
                    className="w-full h-20 p-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={handlePlaceOrder}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-sm transition-all shadow"
            >
              Place Order - ৳{calculateTotal()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}