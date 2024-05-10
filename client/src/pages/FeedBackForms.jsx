import React from 'react'
import { HoverEffect } from '../design/CardHoverEffect'
import { AddFeature, AppRatings, BugReport, CustomerPraise, CustomerSurvey, ProductReview } from '../assets';

export const FeedBackForms = () => {
  return (
    <>
    <div className='max-w-5xl mx-auto px-8 mb-32'>
      <HoverEffect items={projects}/>
    </div>
    </>
  )
}

export const projects = [
  {
    title: "Product Review",
    image: ProductReview,
    link: "/product-review",
  },
  {
    title: "Add Feature Feedback",
    image: AddFeature,
    link: "/add-feature",
  },
  {
    title: "Bug Report",
    image: BugReport,
    link: "/bug-report",
  },
  {
    title: "Customer Survey",
    image: CustomerSurvey,
    link: "/customer-survey",
  },
  {
    title: "App/Site rating",
    image: AppRatings,
    link: "/app-ratings",
  },
  {
    title: "Customer Praise",
    image: CustomerPraise,
    link: "/customer-praise",
  },
];