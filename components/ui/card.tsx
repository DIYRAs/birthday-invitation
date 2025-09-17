import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

function GiftCard({ src = '/images/ph.png', alt = 'Gambar Metode Transfer', rek, opt, an }:
  { src?: string, alt?: string, rek: number | string, opt: string, an: string }) {
  return (
    <div className='flex items-center justify-start gap-3'>
      <Image
        src={src}
        alt={alt}
        width={80}
        height={70}
        className='object-cover object-center h-full' />

      <div className='flex flex-col items-start justify-center'>
        <strong className='text-lg tracking-wide'>
          {rek}
        </strong>
        <p>
          {opt}: Atas Nama {an}
        </p>

        <button className='px-2 py-1 mt-2 text-sm font-semibold text-black transition bg-white border border-white rounded-md cursor-pointer hover:text-white hover:bg-transparent hover:border-white hover:border'>
          Salin Rekening
        </button>
      </div>
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  GiftCard,
}
