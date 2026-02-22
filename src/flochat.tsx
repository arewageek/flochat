'use client'

import React, { useState } from 'react'
import { 
    Share2, 
    X, 
    Instagram, 
    Twitter, 
    Facebook, 
    Linkedin, 
    Youtube, 
    Github, 
    MessageCircle, 
    Mail, 
    Phone, 
    Zap, 
    Sparkles, 
    Grid3X3 
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export interface SocialLink {
    platform: 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'youtube' | 'github' | 'whatsapp' | 'email' | 'phone'
    url: string
    label: string
}

export interface FlochatProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    position?: 'bottom-right' | 'bottom-left'
    bottomOffset?: number
    color?: string // preset name or 'custom'
    customColors?: {
        primary: string
        secondary: string
        hover: string
    }
    socialLinks?: SocialLink[]
    showLabels?: boolean
    animationStyle?: 'fan' | 'stack' | 'grid'
    toggleIcon?: 'share' | 'message' | 'zap' | 'sparkles' | 'grid'
    brandColors?: boolean
    isAbsolute?: boolean
}

const SIZE_MAP = {
    sm: { button: '40px', icon: 16, social: 14 },
    md: { button: '48px', icon: 20, social: 16 },
    lg: { button: '56px', icon: 24, social: 18 },
    xl: { button: '64px', icon: 28, social: 20 }
}

const COLOR_PRESETS: Record<string, { from: string, to: string }> = {
    blue: { from: '#1E40AF', to: '#3B82F6' },
    emerald: { from: '#065F46', to: '#10B981' },
    rose: { from: '#9F1239', to: '#F43F5E' },
    amber: { from: '#92400E', to: '#F59E0B' },
    violet: { from: '#5B21B6', to: '#8B5CF6' },
    indigo: { from: '#3730A3', to: '#6366F1' },
    cyan: { from: '#0E7490', to: '#06B6D4' },
    slate: { from: '#1E293B', to: '#475569' },
    orange: { from: '#9A3412', to: '#F97316' },
    pink: { from: '#9D174D', to: '#EC4899' },
    teal: { from: '#0D9488', to: '#2DD4BF' },
    lime: { from: '#4D7C0F', to: '#A3E635' },
    gold: { from: '#A16207', to: '#EAB308' },
    crimson: { from: '#991B1B', to: '#EF4444' },
    fuchsia: { from: '#86198F', to: '#E879F9' },
}

const PLATFORM_MAP = {
    instagram: { icon: Instagram, color: '#E4405F' },
    twitter: { icon: Twitter, color: '#1DA1F2' },
    facebook: { icon: Facebook, color: '#1877F2' },
    linkedin: { icon: Linkedin, color: '#0A66C2' },
    youtube: { icon: Youtube, color: '#FF0000' },
    github: { icon: Github, color: '#181717' },
    whatsapp: { icon: MessageCircle, color: '#25D366' },
    email: { icon: Mail, color: '#EA4335' },
    phone: { icon: Phone, color: '#34A853' }
}

const TOGGLE_ICONS = {
    share: Share2,
    message: MessageCircle,
    zap: Zap,
    sparkles: Sparkles,
    grid: Grid3X3
}

export function Flochat({
    size = 'md',
    position = 'bottom-right',
    bottomOffset = 32,
    color = 'blue',
    customColors,
    socialLinks = [],
    showLabels = false,
    animationStyle = 'stack',
    toggleIcon = 'share',
    brandColors = false,
    isAbsolute = false
}: FlochatProps) {
    const [isOpen, setIsOpen] = useState(false)

    const IconComponent = TOGGLE_ICONS[toggleIcon]
    const currentSize = SIZE_MAP[size]

    const getButtonStyle = (presetKey: string, isCustom: boolean) => {
        if (isCustom && customColors) {
            return { backgroundColor: customColors.primary }
        }
        const preset = COLOR_PRESETS[presetKey] || COLOR_PRESETS.blue
        return {
            background: `linear-gradient(135deg, ${preset.from}, ${preset.to})`
        }
    }

    const getPosition = (index: number, total: number) => {
        const offset = 60 + (index * 54)
        if (animationStyle === 'stack') return { x: 0, y: -offset }
        if (animationStyle === 'fan') {
            const angle = (Math.PI / 2.5) * (index / (Math.max(1, total - 1)))
            const radius = 80
            return { 
                x: (position === 'bottom-right' ? -1 : 1) * Math.sin(angle) * radius, 
                y: -Math.cos(angle) * radius 
            }
        }
        if (animationStyle === 'grid') {
            const row = Math.floor(index / 2)
            const col = index % 2
            return {
                x: (position === 'bottom-right' ? -1 : 1) * (col * 54),
                y: -(row + 1) * 54
            }
        }
        return { x: 0, y: 0 }
    }

    return (
        <div 
            style={{ 
                position: isAbsolute ? 'absolute' : 'fixed',
                zIndex: 9999,
                bottom: `${bottomOffset}px`,
                right: position === 'bottom-right' ? '32px' : 'auto',
                left: position === 'bottom-left' ? '32px' : 'auto',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
        >
            <AnimatePresence>
                {isOpen && socialLinks.map((link, index) => {
                    const platform = PLATFORM_MAP[link.platform]
                    const SocialIcon = platform.icon
                    const { x, y } = getPosition(index, socialLinks.length)

                    return (
                        <motion.div
                            key={`${link.platform}-${index}`}
                            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1, x, y }}
                            exit={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.05 }}
                            style={{ 
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                left: position === 'bottom-left' ? 0 : 'auto',
                                right: position === 'bottom-right' ? 0 : 'auto'
                            }}
                        >
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px',
                                flexDirection: position === 'bottom-right' ? 'row-reverse' : 'row'
                            }}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        ... (brandColors ? { backgroundColor: platform.color } : getButtonStyle(color, color === 'custom')),
                                        width: currentSize.button,
                                        height: currentSize.button,
                                        borderRadius: '9999px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <SocialIcon size={currentSize.social} />
                                </a>
                                {showLabels && (
                                    <span style={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: '#1a202c',
                                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {link.label}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    ...getButtonStyle(color, color === 'custom'),
                    width: currentSize.button,
                    height: currentSize.button,
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 10,
                    border: 'none',
                    outline: 'none'
                }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                whileTap={{ scale: 0.92 }}
            >
                {isOpen ? <X size={currentSize.icon} /> : <IconComponent size={currentSize.icon} />}
            </motion.button>
        </div>
    )
}
