/*
 * GET blog page.
 */
var linking = require('./linking');

var blogEntries = [
	{
		title: 'Test title', 
		text:'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', 
		submitted: '11/09/2012'
	},
	{
		title: 'Test title 2', 
		text:'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', 
		submitted: '12/09/2012'
	},	
];


exports.blog = function(req, res){
  res.render('blog', { 
    sidemenulinks: linking.getSideMenuLinks(req),
    title: 'Blog',
    blogEntries: blogEntries
  });
};