'use client';

import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { FileText, ShoppingCart, CreditCard, Truck, AlertTriangle, Users, Scale, Mail, Phone } from 'lucide-react';

export default function TermsConditions() {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "general",
      title: "1. General",
      icon: FileText,
      content: `AMIROBD.COM is an eCommerce platform selling clothing and fashion products. Amiro reserves the right to change prices, policies, and website content at any time without prior notice.`
    },
    {
      id: "product-information",
      title: "2. Product Information",
      icon: ShoppingCart,
      content: `We strive to provide accurate product descriptions, sizing details, and images. However, slight variations in color or design may occur due to lighting, photography, or screen differences.`
    },
    {
      id: "order-confirmation",
      title: "3. Order Confirmation",
      icon: FileText,
      content: `An order is confirmed only after successful payment or confirmation call (if applicable). Amiro reserves the right to cancel or refuse any order at its discretion.`
    },
    {
      id: "pricing-payment",
      title: "4. Pricing & Payment",
      icon: CreditCard,
      content: `• All prices are displayed in BDT
      • Payment methods may include Cash on Delivery (COD), Mobile Banking, or Online Payment
      • Amiro reserves the right to cancel any suspicious or fraudulent order`
    },
    {
      id: "shipping-delivery",
      title: "5. Shipping & Delivery",
      icon: Truck,
      content: `Delivery time may vary depending on location and circumstances beyond our control. Customers are responsible for providing accurate shipping information.`
    },
    {
      id: "user-responsibility",
      title: "6. User Responsibility",
      icon: Users,
      content: `By using AMIROBD.COM, you agree not to misuse the website, attempt fraudulent activities, or provide false or misleading information.`
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      icon: AlertTriangle,
      content: `Amiro shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.`
    },
    {
      id: "governing-law",
      title: "8. Governing Law",
      icon: Scale,
      content: `These Terms & Conditions are governed by and interpreted in accordance with the laws of Bangladesh.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 text-lg">Please read these terms carefully</p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Questions About These Terms?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>support@amirobd.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+8801348964016</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
