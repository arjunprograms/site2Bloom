"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Cpu, Code, BarChart3, Zap, Shield, Users } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Deploy autonomous AI agents that learn, adapt, and optimize workflows with predictive intelligence.",
    features: ["LLM-Powered Decision Making", "Neural Network Process Optimization", "Predictive Workflow Analytics"],
  },
  {
    icon: Cpu,
    title: "AI Powered Systems",
    description:
      "Intelligent infrastructure powered by machine learning models that predict and prevent issues before they occur.",
    features: ["AI Predictive Maintenance", "Autonomous System Optimization", "Self-Learning Infrastructure"],
  },
  {
    icon: Users,
    title: "AI-Powered CRM Systems",
    description:
      "Intelligent customer relationship management with predictive analytics, automated workflows, and AI-driven insights.",
    features: [
      "AI Customer Behavior Prediction",
      "Automated Lead Scoring & Nurturing",
      "Real-time Business Dashboards",
    ],
  },
  {
    icon: Code,
    title: "Custom AI Solutions",
    description:
      "Bespoke AI systems built with cutting-edge LLMs and machine learning models tailored to your business logic.",
    features: ["Custom LLM Training", "AI Model Development", "Intelligent System Integration"],
  },
  {
    icon: BarChart3,
    title: "AI-Powered Business Analytics",
    description:
      "Transform data into strategic insights using advanced neural networks and predictive modeling algorithms.",
    features: ["Deep Learning Analytics", "AI-Driven Forecasting Models", "Intelligent Business Intelligence"],
  },
  {
    icon: Zap,
    title: "Intelligent Process Automation",
    description:
      "Orchestrate complex business processes with AI agents that understand context and make autonomous decisions.",
    features: ["AI Agent Orchestration", "Machine Learning Optimization", "Cognitive Process Mining"],
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description:
      "Protect your infrastructure with self-learning AI defense systems and predictive threat intelligence.",
    features: ["AI Threat Prediction", "Autonomous Security Response", "ML-Based Compliance Monitoring"],
  },
]

export function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transform your business with AI-driven automation, intelligence, and security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.20] backdrop-blur-xl rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-white/70">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/80 flex items-center">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
