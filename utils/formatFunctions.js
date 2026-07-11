export function formatDuration(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - 3600 * hours) / 60);
  const seconds = duration - 3600 * hours - 60 * minutes;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function formatDate(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years > 1
      ? `${years} years ago`
      : `1 year ago`;
  }
  if (months > 0) {
    return months > 1 
      ? `${months} months ago`
      : `1 month ago`;
  }
  if (days > 0) {
    return days > 1
      ? `${days} days ago`
      : `1 day ago`;
  }
  if (hours > 0) {
    return hours > 1
      ? `${hours} hours ago`
      : `1 hour ago`;
  }
  if (minutes > 0) {
    return minutes > 1
      ? `${minutes} minutes ago`
      : `1 minute ago`;
  }
  return 'Just now';
}

export function formatViews(views) {
  const thousands = Math.round(views / 100) / 10;
  const millions = Math.round(views / 100000) / 10;

  if (Math.floor(millions) > 0) return `${millions}M views`;
  if (Math.floor(thousands) > 0) return `${thousands}K views`;
  if (views > 0) {
    return views > 1
      ? `${views} views`
      : '1 view';
  }
  return 'No views';
}