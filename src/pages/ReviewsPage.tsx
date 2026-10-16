import { useState, useMemo } from 'react';
import {
  Star,
  ExternalLink,
  Award,
  ShieldCheck,
  Search,
  CheckCircle2,
  Phone,
  Sparkles,
  Filter,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';
import { business } from '@/data/business';
import { reviews, reviewsStats } from '@/data/reviews';
import { getLocalBusinessSchema } from '@/data/schema';

export default function ReviewsPage() {
  const [selectedRating, setSelectedRating] = useState<'all' | '5' | '1'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'helpful'>('newest');

  // Filtered and sorted reviews
  const filteredReviews = useMemo(() => {
    return reviews
      .filter((review) => {
        // Rating filter
        if (selectedRating !== 'all' && review.rating.toString() !== selectedRating) {
          return false;
        }

        // Topic filter
        if (selectedTopic !== 'all') {
          const lowerTopic = selectedTopic.toLowerCase();
          const matchesTag = review.tags.some((t) => t.toLowerCase().includes(lowerTopic));
          const matchesText = review.text.toLowerCase().includes(lowerTopic);
          const matchesOwner = review.ownerResponse?.text.toLowerCase().includes(lowerTopic);
          if (!matchesTag && !matchesText && !matchesOwner) {
            return false;
          }
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesAuthor = review.author.toLowerCase().includes(q);
          const matchesText = review.text.toLowerCase().includes(q);
          const matchesTags = review.tags.some((t) => t.toLowerCase().includes(q));
          const matchesOwner = review.ownerResponse?.text.toLowerCase().includes(q);
          if (!matchesAuthor && !matchesText && !matchesTags && !matchesOwner) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'highest') {
          return b.rating - a.rating;
        }
        if (sortBy === 'helpful') {
          return (b.likes || 0) - (a.likes || 0);
        }
        // default: keep source order (which represents Google's chronological view)
        return 0;
      });
  }, [selectedRating, selectedTopic, searchQuery, sortBy]);

  const ratingCounts = reviewsStats.ratingCounts;
  const fiveStarPercentage = Math.round((ratingCounts[5] / reviewsStats.totalReviews) * 100);
  const oneStarPercentage = Math.round((ratingCounts[1] / reviewsStats.totalReviews) * 100);

  return (
    <>
      <SEO
        title={`Verified Google Reviews | ${business.name} - Taylor, MI`}
        description={`Read all ${business.reviewCount} authentic Google reviews for ${business.name}. Rated ${business.rating}/5 stars. Master Electrician with 40+ years experience in Taylor, Michigan.`}
        canonical="/reviews"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'Reviews', path: '/reviews' }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-900 py-14 lg:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffd70f_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-electric-400 animate-pulse-slow" />
              <span className="text-sm font-semibold text-electric-400">Verified Google Reviews</span>
            </div>
            
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              What Our Customers Say
            </h1>
            <p className="mt-4 text-lg text-charcoal-200">
              Honest feedback from real homeowners and business owners across Taylor and Metro Detroit.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href={business.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Review Us on Google
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="btn-outline-white"
              >
                <Phone className="h-4 w-4" />
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings Dashboard & Filter Controls */}
      <section className="section-padding bg-charcoal-50 border-b border-charcoal-200/70">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Top Summary Card */}
          <div className="rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-card-lg">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Overall Score */}
              <div className="text-center lg:col-span-4 lg:border-r lg:border-charcoal-100 lg:pr-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Google Overall Rating
                </div>
                <div className="font-display text-5xl font-extrabold text-navy-900 sm:text-6xl">
                  {reviewsStats.averageRating}
                </div>
                <div className="mt-3 flex justify-center">
                  <StarRating rating={reviewsStats.averageRating} size="lg" />
                </div>
                <p className="mt-2 text-sm font-medium text-charcoal-600">
                  Based on <strong>{reviewsStats.totalReviews} authentic Google reviews</strong>
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Verified Taylor, MI Contractor</span>
                </div>
              </div>

              {/* Star Breakdown */}
              <div className="space-y-2.5 lg:col-span-5 lg:px-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-semibold text-navy-900">5 stars</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-charcoal-100">
                    <div
                      className="h-full rounded-full bg-electric-500 transition-all duration-500"
                      style={{ width: `${fiveStarPercentage}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-medium text-charcoal-600">
                    {ratingCounts[5]} ({fiveStarPercentage}%)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-charcoal-400">4 stars</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-charcoal-100">
                    <div className="h-full rounded-full bg-electric-500" style={{ width: '0%' }} />
                  </div>
                  <span className="w-12 text-right text-charcoal-400">0 (0%)</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-charcoal-400">3 stars</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-charcoal-100">
                    <div className="h-full rounded-full bg-electric-500" style={{ width: '0%' }} />
                  </div>
                  <span className="w-12 text-right text-charcoal-400">0 (0%)</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-charcoal-400">2 stars</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-charcoal-100">
                    <div className="h-full rounded-full bg-electric-500" style={{ width: '0%' }} />
                  </div>
                  <span className="w-12 text-right text-charcoal-400">0 (0%)</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-charcoal-600">1 star</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-charcoal-100">
                    <div
                      className="h-full rounded-full bg-charcoal-400"
                      style={{ width: `${oneStarPercentage}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-medium text-charcoal-600">
                    {ratingCounts[1]} ({oneStarPercentage}%)
                  </span>
                </div>
              </div>

              {/* Master Electrician Quick Highlights */}
              <div className="rounded-xl border border-navy-100 bg-navy-50/60 p-5 lg:col-span-3">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900 mb-3">
                  <Award className="h-4 w-4 text-electric-600" />
                  <span>The Whipple Guarantee</span>
                </div>
                <ul className="space-y-2 text-xs text-charcoal-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-electric-600 mt-0.5" />
                    <span><strong>40+ Years</strong> of hands-on Master Electrician experience</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-electric-600 mt-0.5" />
                    <span><strong>Honest Diagnostics:</strong> dangerous code & wiring corrections</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-electric-600 mt-0.5" />
                    <span><strong>Jim Whipple Answers:</strong> direct personal service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Keyword Topics Pills (from Google Reviews metadata) */}
            <div className="mt-6 pt-6 border-t border-charcoal-100">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-electric-600" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Popular Topics in Reviews
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTopic('all')}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    selectedTopic === 'all'
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                  }`}
                >
                  All Topics ({reviews.length})
                </button>
                {reviewsStats.highlightKeywords.map((item) => (
                  <button
                    key={item.keyword}
                    type="button"
                    onClick={() =>
                      setSelectedTopic(selectedTopic === item.keyword ? 'all' : item.keyword)
                    }
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      selectedTopic === item.keyword
                        ? 'bg-electric-400 text-navy-950 font-bold shadow-sm'
                        : 'bg-white border border-charcoal-200 text-charcoal-700 hover:border-charcoal-300 hover:bg-charcoal-50'
                    }`}
                  >
                    <span className="capitalize">{item.keyword}</span>
                    <span className="text-[11px] opacity-75 font-semibold">({item.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Filter and Search Bar */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Rating Filter Tabs */}
            <div className="inline-flex rounded-xl bg-white p-1 shadow-sm border border-charcoal-200/80">
              <button
                type="button"
                onClick={() => setSelectedRating('all')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
                  selectedRating === 'all'
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'text-charcoal-600 hover:text-navy-900'
                }`}
              >
                All Reviews ({reviews.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedRating('5')}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-colors ${
                  selectedRating === '5'
                    ? 'bg-electric-400 text-navy-950 shadow-xs'
                    : 'text-charcoal-600 hover:text-navy-900'
                }`}
              >
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                5 Stars Only ({ratingCounts[5]})
              </button>
            </div>

            {/* Search Input & Sort */}
            <div className="flex flex-1 items-center justify-end gap-3 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search reviews by name or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-charcoal-200 bg-white py-2 pl-9 pr-3 text-xs text-navy-900 placeholder-charcoal-400 focus:border-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 shadow-xs"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort reviews"
                className="rounded-xl border border-charcoal-200 bg-white px-3 py-2 text-xs font-semibold text-navy-900 focus:border-navy-900 focus:outline-none shadow-xs"
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>

          {/* Results Count & Reset Filter Indicator */}
          <div className="mt-4 flex items-center justify-between text-xs text-charcoal-500">
            <span>
              Showing <strong>{filteredReviews.length}</strong> of {reviews.length} reviews
              {selectedTopic !== 'all' && (
                <span> &bull; Filtered by topic: <strong>{selectedTopic}</strong></span>
              )}
              {selectedRating !== 'all' && (
                <span> &bull; <strong>{selectedRating} Star</strong> ratings</span>
              )}
            </span>
            {(selectedRating !== 'all' || selectedTopic !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedRating('all');
                  setSelectedTopic('all');
                  setSearchQuery('');
                }}
                className="font-semibold text-electric-700 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <section className="section-padding bg-white min-h-[500px]">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-md rounded-2xl border border-charcoal-200 bg-charcoal-50 p-10 text-center">
              <Search className="mx-auto h-10 w-10 text-charcoal-400" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                No matching reviews found
              </h3>
              <p className="mt-2 text-xs text-charcoal-600">
                Try searching for different keywords or clear your active filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedRating('all');
                  setSelectedTopic('all');
                  setSearchQuery('');
                }}
                className="mt-5 btn-secondary text-xs"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Experience Section */}
      <section className="section-padding bg-charcoal-50 border-t border-charcoal-200/80">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-electric-400/20 text-electric-600 mb-4">
              <Star className="h-7 w-7 text-electric-600" fill="currentColor" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
              Have You Worked With Whipple Electric Inc?
            </h2>
            <p className="mt-3 text-charcoal-600 leading-relaxed text-sm">
              We value honest feedback from every client. Your review helps fellow homeowners across Taylor, Southgate, Allen Park, and Metro Detroit choose a safe, experienced electrician.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={business.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Leave a Google Review
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="btn-dark"
              >
                <Phone className="h-4 w-4" />
                Call Jim Whipple: {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
