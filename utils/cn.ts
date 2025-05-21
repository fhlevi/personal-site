import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export function cnWithPrefix(prefix: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${prefix}-${input}`)))
}
export function cnWithPrefixAndSuffix(prefix: string, suffix: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${prefix}-${input}-${suffix}`)))
}
export function cnWithPrefixAndSuffixAndModifier(prefix: string, suffix: string, modifier: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${prefix}-${input}-${suffix}-${modifier}`)))
}
export function cnWithPrefixAndModifier(prefix: string, modifier: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${prefix}-${input}-${modifier}`)))
}
export function cnWithSuffix(suffix: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${input}-${suffix}`)))
}
export function cnWithModifier(modifier: string, ...inputs: ClassValue[]) {
    return twMerge(clsx(inputs.map((input) => `${input}-${modifier}`)))
}
