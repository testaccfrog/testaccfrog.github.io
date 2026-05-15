$(document).ready(function() {

      let $emailCollapse = $('#iconEmail');
      let $phoneCollapse = $('#iconPhone');
      let $instaCollapse = $('#iconInsta');

      let $emailButton = $('[data-bs-target="#iconEmail"]');
      let $phoneButton = $('[data-bs-target="#iconPhone"]');
      let $instaButton = $('[data-bs-target="#iconInsta"]');

      $(document).on('click', function(event){
            if ($emailCollapse.hasClass('show') && !$emailCollapse.is(event.target) && !$emailCollapse.has(event.target).length && !$emailButton.is(event.target)){
                  const emailCollapseInstance = bootstrap.Collapse.getInstance($emailCollapse[0]);
                  emailCollapseInstance.hide();
            }
            else if ($phoneCollapse.hasClass('show') && !$phoneCollapse.is(event.target) && !$phoneCollapse.has(event.target).length && !$phoneButton.is(event.target)){
                  const phoneCollapseInstance = bootstrap.Collapse.getInstance($phoneCollapse[0]);
                  phoneCollapseInstance.hide();
            }
            else if ($instaCollapse.hasClass('show') && !$instaCollapse.is(event.target) && !$instaCollapse.has(event.target).length && !$instaButton.is(event.target)){
                  const instaCollapseInstance = bootstrap.Collapse.getInstance($instaCollapse[0]);
                  instaCollapseInstance.hide();
            }
      });

});

