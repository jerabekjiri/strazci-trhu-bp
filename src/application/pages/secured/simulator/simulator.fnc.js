export const achievedRating = (rating) => rating.reduce((sum, current) => sum + Number(current.value), 0);

export const maxAchievableRating = (rating, maxVal = 5) => rating.reduce(sum => sum + maxVal, 0);

export const achievedRatingPercentage = (rating) => achievedRating(rating) / maxAchievableRating(rating) * 100;