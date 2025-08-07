$(document).ready(function() {

      let $emailCollapse = $('#iconEmail');
      let $phoneCollapse = $('#iconPhone');
      let $emailButton = $('[data-bs-target="#iconEmail"]')
      let $phoneButton = $('[data-bs-target="#iconPhone"]')
      // [] are used a selector to select HTML elements based of specified attribute


      // Auto closes open collapse els when any other part of doc is pressed
      $(document).on('click', function(event){
            if ($emailCollapse.hasClass('show') && !$emailCollapse.is(event.target) && !$emailCollapse.has(event.target).length && !$emailButton.is(event.target)){
                  const emailCollapseInstance = bootstrap.Collapse.getInstance($emailCollapse[0]);
                  emailCollapseInstance.hide();
            }
            else if ($phoneCollapse.hasClass('show') && !$phoneCollapse.is(event.target) && !$phoneCollapse.has(event.target).length && !$phoneButton.is(event.target)){
                  const phoneCollapseInstance = bootstrap.Collapse.getInstance($phoneCollapse[0]);
                  phoneCollapseInstance.hide();
            }
      }) 

      /*    Initial attempt targeting only the other collapse el
            No longer needed since func above takes care of this usecase
      $emailCollapse.on('shown.bs.collapse', function() {
            const phoneCollapseInstance = bootstrap.Collapse.getInstance($phoneCollapse[0]);
            if(phoneCollapseInstance){
                  phoneCollapseInstance.hide();
            }
      })

      $phoneCollapse.on('shown.bs.collapse', function() {
            const emailCollapseInstance = bootstrap.Collapse.getInstance($emailCollapse[0]);
            if(emailCollapseInstance) {
                  emailCollapseInstance.hide();
            }
      });
      */
      
});
