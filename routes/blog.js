/*
 * GET blog page.
 */


var blogEntries = [{title: 'Test title', text:'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', submitted: '11/09/2012'}];


exports.blog = function(req, res){
  res.render('blog', { 
    sidemenulinks: res.app.settings['sidemenulinks'],
    title: 'Blog',
    blogEntries: blogEntries
  });
};