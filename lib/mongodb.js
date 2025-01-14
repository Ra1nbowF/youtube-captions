const uri = process.env.MONGODB_URI;
console.log('MongoDB URI format:', uri.replace(/\/\/.*@/, '//<credentials>@')); 