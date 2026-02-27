'use client';

import React, { useState } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ChevronDown, HelpCircle, ShoppingBag, CreditCard, Truck, RotateCcw, Shield, Users, Mail, Phone } from 'lucide-react';

export default function FAQ() {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const faqCategories = [
        {
            id: "ordering",
            title: "Ordering & Payment",
            icon: ShoppingBag,
            questions: [
                {
                    id: "order-1",
                    question: "How do I place an order?",
                    answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in, provide shipping and billing information, and complete payment to confirm your order."
                },
                {
                    id: "order-2",
                    question: "What payment methods do you accept?",
                    answer: "We accept major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment methods including mobile banking. All payments are processed securely through our trusted payment partners."
                },
                {
                    id: "order-3",
                    question: "Is it safe to shop on your website?",
                    answer: "Yes, absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your credit card details on our servers, and all transactions are processed through secure payment gateways."
                },
                {
                    id: "order-4",
                    question: "Can I modify or cancel my order?",
                    answer: "You can modify or cancel your order within 1 hour of placing it by contacting our customer service. After that, orders are processed and cannot be changed. For cancellations, please call us immediately."
                }
            ]
        },
        {
            id: "shipping",
            title: "Shipping & Delivery",
            icon: Truck,
            questions: [
                {
                    id: "shipping-1",
                    question: "How long does shipping take?",
                    answer: "Standard shipping takes 3-5 business days within Bangladesh. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location and typically take 7-14 business days."
                },
                {
                    id: "shipping-2",
                    question: "Do you ship internationally?",
                    answer: "Currently, we only ship within Bangladesh. We're working on expanding our international shipping options. Please check back later for updates on international delivery."
                },
                {
                    id: "shipping-3",
                    question: "How much does shipping cost?",
                    answer: "Shipping costs are calculated based on your location and the weight of your order. Standard shipping starts at inside Dhaka is 70 Taka BDT and outside Dhaka is 130 Taka BDT. Free shipping is available on orders over ৳2000 or above."
                },
                {
                    id: "shipping-4",
                    question: "Can I track my order?",
                    answer: "Yes! Once your order ships, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or the courier's tracking system."
                }
            ]
        },
        {
            id: "returns",
            title: "Returns & Refunds",
            icon: RotateCcw,
            questions: [
                {
                    id: "returns-1",
                    question: "What is your return policy?",
                    answer: "We accept returns within 07 days of delivery. Items must be unused, in original packaging, and in the same condition as received. Custom or personalized items may not be eligible for return."
                },
                {
                    id: "returns-2",
                    question: "How do I return an item?",
                    answer: "To return an item, contact our customer service within 07 days of delivery. We'll provide you with a return authorization number and shipping label. Return shipping costs are the responsibility of the customer."
                },
                {
                    id: "returns-3",
                    question: "How long does it take to process a refund?",
                    answer: "Refunds are processed within 5-7 business days after we receive your returned item. The refund will be credited back to your original payment method. You'll receive an email confirmation once the refund is processed."
                },
                {
                    id: "returns-4",
                    question: "What if my item arrives damaged?",
                    answer: "If your item arrives damaged, please contact us within 24 hours of delivery. Take photos of the damage and we'll arrange for a replacement or refund. We'll cover the return shipping costs for damaged items."
                }
            ]
        },
        {
            id: "product",
            title: "Product Information",
            icon: HelpCircle,
            questions: [
                {
                    id: "product-1",
                    question: "Are your clothing items original and high quality?",
                    answer: "Yes, all Amiro clothing items are made using premium-quality fabrics and go through strict quality checks before being listed on our website. We focus on comfort, durability, and modern design."
                },
                {
                    id: "product-2",
                    question: "Do you offer size options or customization?",
                    answer: "We offer multiple standard size options (S, M, L, XL, etc.) depending on the product. Please check our size chart before placing your order. Currently, we do not offer custom tailoring unless specifically mentioned."
                },
                {
                    id: "product-3",
                    question: "What materials are used in your clothing?",
                    answer: "Our products are made from high-quality fabrics such as premium cotton, blended fabrics, fleece, denim, and other comfortable materials. Each product page includes detailed fabric and care information."
                },
                {
                    id: "product-4",
                    question: "Do you provide washing and care instructions?",
                    answer: "Yes, washing and care instructions are provided on the product label and in the product description. Following these instructions helps maintain color, fit, and fabric quality."
                }
            ]
        },
        {
            id: "account",
            title: "Account & Security",
            icon: Users,
            questions: [
                {
                    id: "account-1",
                    question: "How do I create an account?",
                    answer: "You can create an account by clicking the 'Sign Up' button in the header. You'll need to provide your name, email address, and create a password. You can also create an account during checkout."
                },
                {
                    id: "account-2",
                    question: "I forgot my password. How do I reset it?",
                    answer: "Click on 'Forgot Password' on the login page. Enter your email address and we'll send you a link to reset your password. The link will expire after 24 hours for security."
                },
                {
                    id: "account-3",
                    question: "How do I update my account information?",
                    answer: "Log into your account and go to 'My Account' section. You can update your personal information, shipping addresses, and communication preferences at any time."
                },
                {
                    id: "account-4",
                    question: "Is my personal information secure?",
                    answer: "Yes, we take your privacy seriously. We use industry-standard security measures to protect your personal information. We never share your data with third parties without your consent."
                }
            ]
        },

    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-blue-500" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600 text-lg">Find answers to common questions about our products and services</p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqCategories.map((category) => (
                        <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            {/* Category Header */}
                            <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <category.icon className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                                </div>
                            </div>

                            {/* Questions */}
                            <div className="divide-y divide-gray-300">
                                {category.questions.map((item) => (
                                    <div key={item.id} className="">
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer px-6"
                                        >
                                            <span className="font-medium text-gray-900 pr-4">
                                                <span className="text-blue-500 font-semibold">Q: </span>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openItems.has(item.id) ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {openItems.has(item.id) && (
                                            <div className="pb-4  ps-12 pe-6">
                                                <p className="text-gray-600 leading-relaxed">
                                                    <span className="text-blue-500 font-semibold">A: </span>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
                        <p className="text-gray-600 mb-6">
                            Can't find the answer you're looking for? Our customer support team is here to help!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center justify-center space-x-2 text-gray-600">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span>info@amirobd.com</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-gray-600">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span>+8801348964016</span>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            Available Saturday-Friday, 9:00 AM - 10:00 PM
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
