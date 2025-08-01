"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BrandPartner {
  _id: string;
  title: string;
  image: string;
}

interface ApiResponse {
  success: boolean;
  data: BrandPartner[];
}

const LogoShowcase = () => {
  const [brands, setBrands] = useState<BrandPartner[]>([]);
  const [decorativeBrands, setDecorativeBrands] = useState<BrandPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchAllBrands = async () => {
      try {
        setLoading(true);
        setError(null);

        const [architecturalResponse, decorativeResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=brandPartner`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=decorative`),
        ]);

        if (!architecturalResponse.ok || !decorativeResponse.ok) {
          throw new Error("Failed to fetch brand data");
        }

        const [architecturalResult, decorativeResult]: ApiResponse[] =
          await Promise.all([
            architecturalResponse.json(),
            decorativeResponse.json(),
          ]);

        if (architecturalResult.success) setBrands(architecturalResult.data);
        if (decorativeResult.success)
          setDecorativeBrands(decorativeResult.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (mounted) fetchAllBrands();
  }, [mounted]);

  return (
    <section className="bg-gray-900 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== ARCHITECTURAL SECTION ===== */}
        <div className="mb-12 sm:mb-16">
          <h2 className="mb-6 sm:mb-8 text-center text-xl font-bold tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
            ARCHITECTURAL
          </h2>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-400 text-base sm:text-lg">Error: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 sm:px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm sm:text-base"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && brands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-base sm:text-lg">
                No architectural brand partners found.
              </p>
            </div>
          )}

          {!loading && !error && brands.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 max-w-6xl mx-auto">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-[#E5F4FF] p-2 sm:p-3 lg:p-3 transition-all duration-300 hover:bg-[#E5F4FF] hover:scale-[102%] sm:hover:scale-[104%]"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-contain p-2 sm:p-3 lg:p-2 lg:scale-[0.7]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== DECORATIVE SECTION ===== */}
        <div>
          <h2 className="mb-6 sm:mb-8 text-center text-xl font-bold tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
            DECORATIVE
          </h2>

          {!loading && !error && decorativeBrands.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 max-w-6xl mx-auto">
              {decorativeBrands.map((brand) => (
                <div
                  key={brand._id}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-[#E5F4FF] p-2 sm:p-3 lg:p-3 transition-all duration-300 hover:bg-[#E5F4FF] hover:scale-[102%] sm:hover:scale-[104%]"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-contain p-2 sm:p-3 lg:p-2 lg:scale-[0.7]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;