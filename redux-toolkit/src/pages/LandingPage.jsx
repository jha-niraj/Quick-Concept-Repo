import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Rocket, Sparkles, Target, Zap, CheckCircle, Shield, Clock } from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <span className="relative inline-block">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    <Sparkles className="h-12 w-12 text-primary" />
                                </motion.div>
                            </span>
                        </div>
                        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            TaskFlow
                        </h1>
                        <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Your tasks, your flow, your success.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => navigate('/dashboard')}
                                className="animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors hover:border-slate-800"
                            >
                                Get Started <Rocket className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Why TaskFlow?</h2>
                        <p className="text-muted-foreground mt-2">Simple. Powerful. Beautiful.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                                title: 'Lightning Fast',
                                description: 'No delays, no waiting. Just pure productivity.',
                            },
                            {
                                icon: <Target className="h-8 w-8 text-blue-500" />,
                                title: 'Stay Focused',
                                description: 'Clean interface designed for maximum focus.',
                            },
                            {
                                icon: <Sparkles className="h-8 w-8 text-purple-500" />,
                                title: 'Beautiful Design',
                                description: 'Modern, intuitive, and pleasing to the eye.',
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-px bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                                <div className="relative p-8 bg-card rounded-lg border">
                                    <div className="mb-4 inline-block">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-primary/5">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">How It Works</h2>
                        <p className="text-muted-foreground mt-2">Three simple steps to boost your productivity</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                                title: 'Create Tasks',
                                description: 'Add your tasks with detailed descriptions and priorities.',
                            },
                            {
                                icon: <Clock className="h-8 w-8 text-orange-500" />,
                                title: 'Track Progress',
                                description: 'Monitor your progress and stay on top of deadlines.',
                            },
                            {
                                icon: <Shield className="h-8 w-8 text-indigo-500" />,
                                title: 'Complete Goals',
                                description: 'Achieve your goals and celebrate your success.',
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className="p-8 bg-card rounded-lg border relative z-10">
                                    <div className="mb-4 inline-block">{step.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border z-0" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join thousands of users who have transformed their productivity with TaskFlow.
                        </p>
                        <Button
                            size="lg"
                            onClick={() => navigate('/dashboard')}
                            className="animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors hover:border-slate-800"
                        >
                            Try TaskFlow Now <Rocket className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}