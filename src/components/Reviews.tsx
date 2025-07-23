import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const reviews = [
    {
      id: 1,
      text: "We've been using Kluvo for about 6 months now and honestly its been a game changer. The quality of leads has improved significantly and we're getting meetings that actually convert. Only downside is the time zone thing can be tricky sometimes but overall really happy.",
      author: "Sarah M.",
      title: "Sales Director",
      rating: 4,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      text: "Best decision we made this year! The team in KL are amazing - they really understand our product and sound like they work right here with us. ROI has been incredible, we're booking 3x more qualified meetings than before. Highly recommend to anyone looking to scale outbound.",
      author: "Mike Thompson",
      title: "Founder",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      text: "Really good service. Setup was quick and results came fast.",
      author: "Alex K.",
      title: "Marketing Manager",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      id: 4,
      text: "Good service overall but took a few weeks to get the messaging right. The reps are professional and the booking quality is solid. Price is fair compared to hiring internally. Would of been nice to have faster setup but worth the wait.",
      author: "Jennifer K.",
      title: "VP Marketing", 
      rating: 4,
      avatar: "👩‍🎯"
    },
    {
      id: 5,
      text: "Works well for us. The reps sound professional and booking quality is decent. Not perfect but good value for money.",
      author: "Rachel T.",
      title: "Business Owner",
      rating: 4,
      avatar: "👩‍💼"
    },
    {
      id: 6,
      text: "Kluvo has been really helpful for our outbound efforts. The predictive dialing tech means our conversion rates are much better than manual calling. Only thing is sometimes the follow up cadence could be more aggressive but that might just be our industry.",
      author: "David Chen",
      title: "Growth Manager",
      rating: 4,
      avatar: "👨‍📊"
    },
    {
      id: 7,
      text: "Solid service. Gets the job done.",
      author: "Mark R.",
      title: "Sales Manager",
      rating: 4,
      avatar: "👨‍💼"
    },
    {
      id: 8,
      text: "We tried them for 3 months. Results were ok but not amazing. The quality control is good and the reps are professional. Probably works better for some industries than others. Customer service was responsive when we had questions tho.",
      author: "Lisa R.",
      title: "Business Development",
      rating: 3,
      avatar: "👩‍💼"
    },
    {
      id: 9,
      text: "Great team, really impressed with there knowledge of our industry. The calls converted well and we ended up signing more deals. Would definetly recommend.",
      author: "James Wilson",
      title: "Head of Sales",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 10,
      text: "Absolutley blown away by the results! Our calendar went from empty to fully booked within 6 weeks. The integration with our CRM was seamless and the reporting is excellent. Team in Beirut really knows their stuff. Can't imagine going back to doing this ourselves.",
      author: "Tom Bradley",
      title: "CEO",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      id: 11,
      text: "Pretty good experience overall. Few hiccups at first but they sorted it out quick.",
      author: "Emma D.",
      title: "Operations Director", 
      rating: 4,
      avatar: "👩‍💼"
    },
    {
      id: 12,
      text: "The service is okay. We've seen some improvement in our outbound but nothing groundbreaking. The price point is reasonable and the team is responsive when we need support. Might work better for other companies.",
      author: "Steve M.",
      title: "VP Sales",
      rating: 3,
      avatar: "👨‍📊"
    }
  ];

  // Smooth transition function
  const changeReview = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReview(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      const nextIndex = (currentReview + 1) % reviews.length;
      changeReview(nextIndex);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [isAutoPlaying, reviews.length, currentReview]);

  const nextReview = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    const nextIndex = (currentReview + 1) % reviews.length;
    changeReview(nextIndex);
  };

  const prevReview = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    const prevIndex = (currentReview - 1 + reviews.length) % reviews.length;
    changeReview(prevIndex);
  };

  const goToReview = (index: number) => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    changeReview(index);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  const currentReviewData = reviews[currentReview];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots bg-dots opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real feedback from businesses who've transformed their outbound sales with Kluvo.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12 text-center h-96 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">kluvo</h3>
              </div>
              
              <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                <StarRating rating={currentReviewData.rating} />
                
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{currentReviewData.text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {currentReviewData.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      {currentReviewData.author}
                    </div>
                    <div className="text-white/80">
                      {currentReviewData.title}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview 
                      ? "bg-white" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;