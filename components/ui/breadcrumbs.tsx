"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="hover:underline text-saloon-brown font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}

              {!isLast && <ChevronRight size={16} className="text-gray-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
