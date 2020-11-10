$(".urut").change(function() {
  $.ajax({
    url: "<?php echo base_url(); ?>categories/brand/<?= $link_brand; ?>?l=<?= $l; ?>&h=<?= $h; ?>&city=<?= $city; ?>&city_name=<?= $city_name; ?>&ket=view",
    type: "POST",
    data: "urut=" + $(".urut").val(),
    success: function(data) {
      $("#result").html(data);
    }
  })
})