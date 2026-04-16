"use client";

import * as React from "react";

import { Button } from "@/components/comic-ui/button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/comic-ui/toast";

export function DashToastDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <div className="rounded-[var(--radius-comic)] border-[3px] border-border bg-white dark:bg-card p-4 shadow-[var(--shadow-comic)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wider">
              Toast Demo
            </p>
            <p className="text-xs font-bold text-muted-foreground">
              Radix-powered comic notification with keyboard and close support.
            </p>
          </div>
          <Button
            size="sm"
            className="w-full sm:w-auto"
            onClick={() => setOpen(true)}
          >
            Trigger Toast
          </Button>
        </div>
      </div>

      <Toast
        open={open}
        onOpenChange={setOpen}
        variant="success"
        duration={4500}
      >
        <div className="grid gap-1">
          <ToastTitle>Mission broadcast sent</ToastTitle>
          <ToastDescription>
            Sector 7 heroes received the emergency update.
          </ToastDescription>
        </div>
        <ToastAction altText="Open mission board">Open Board</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
