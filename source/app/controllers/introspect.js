$(document).ready(function() {
  var katie = new User();

  var bodyCategory = new Category("Body");
  var mindCategory = new Category("Mind");
  var heartCategory = new Category("Heart");
  var spiritCategory = new Category("Spirit");
  var principlesCategory = new Category("Principles");
  var otherCategory = new Category("Other");

  var joey = new Person("1", "Joey", "crush");
  var patrick = new Person("2", "Patrick", "crush");
  var greg = new Person("3", "Greg", "relationship");
  var bill = new Person("4", "Bill", "crush");
  var danny = new Person("5", "Danny", "dated");
  var barry = new Person("6", "Barry", "dated");

  katie.addPerson(joey);
  katie.addPerson(patrick);
  katie.addPerson(greg);
  katie.addPerson(bill);
  katie.addPerson(danny);
  katie.addPerson(barry);


  var cute = new Quality("cute", "body");
  var athletic = new Quality("athletic", "body");
  var clean = new Quality("clean", "body");
  var healthy = new Quality("healthy", "body");
  var physique = new Quality("physique", "body");
  var asksQuestions = new Quality("asks questions", "mind");
  var goodConvos = new Quality("good convos", "mind");
  var lifeLearner = new Quality("life-long learner", "mind");
  var openMinded = new Quality("open minded", "mind");
  var politicallySimilar = new Quality("politically similar", "mind");
  var affectionate = new Quality("affectionate", "heart");
  var communicates = new Quality("communicates", "heart");
  var compassionate = new Quality("compassionate", "heart");
  var family = new Quality("family", "heart");
  var goodWithKids = new Quality("good with kids", "heart");
  var listens = new Quality("listens", "heart");
  var patient = new Quality("patient", "heart");
  var pursues = new Quality("pursues", "heart");
  var supportive = new Quality("supportive", "heart");
  var willingToLove = new Quality("willing to love", "heart");
  var kind = new Quality("kind", "heart");
  var aweOfBeauty = new Quality("awe of beauty", "spirit");
  var defaultIsLove = new Quality("default is love", "spirit");
  var faith = new Quality("faith", "spirit");
  var joyful = new Quality("joyful", "spirit");
  var growthMindset = new Quality("growth mindset", "principles");
  var honesty = new Quality("honesty", "principles");
  var humility = new Quality("humility", "principles");
  var integrity = new Quality("integrity", "principles");
  var loyal = new Quality("loyal", "principles");
  var respectful = new Quality("respectful", "principles");
  var responsible = new Quality("responsible", "principles");
  var committed = new Quality("committed", "principles");
  var acceptsHelp = new Quality("accepts help", "other");
  var adventurous = new Quality("adventurous", "other");
  var dancer = new Quality("dancer", "other");
  var protective = new Quality("protective", "other");
  var spontaneous = new Quality("spontaneous", "other");
  var witHumorCharm = new Quality("wit/humor/charm", "other");




  joey.addQuality(cute);
  joey.addQuality(family);
  joey.addQuality(goodWithKids);

  patrick.addQuality(cute);
  patrick.addQuality(politicallySimilar);
  patrick.addQuality(affectionate);
  patrick.addQuality(compassionate);
  patrick.addQuality(family);
  patrick.addQuality(goodWithKids);
  patrick.addQuality(willingToLove);
  patrick.addQuality(faith);
  patrick.addQuality(integrity);
  patrick.addQuality(respectful);
  patrick.addQuality(adventurous);
  patrick.addQuality(protective);
  patrick.addQuality(spontaneous);
  patrick.addQuality(witHumorCharm);


  greg.addQuality(athletic);
  greg.addQuality(clean);
  greg.addQuality(cute);
  greg.addQuality(healthy);
  greg.addQuality(physique);
  greg.addQuality(goodConvos);
  greg.addQuality(lifeLearner);
  greg.addQuality(openMinded);
  greg.addQuality(politicallySimilar);
  greg.addQuality(family);
  greg.addQuality(goodWithKids);
  greg.addQuality(kind);
  greg.addQuality(honesty);
  greg.addQuality(loyal);
  greg.addQuality(respectful);
  greg.addQuality(responsible);
  greg.addQuality(adventurous);
  greg.addQuality(dancer);
  greg.addQuality(protective);
  greg.addQuality(witHumorCharm);

  bill.addQuality(cute);
  bill.addQuality(pursues);


  danny.addQuality(cute);
  danny.addQuality(asksQuestions);
  danny.addQuality(openMinded);
  danny.addQuality(communicates);
  danny.addQuality(compassionate);
  danny.addQuality(kind);
  danny.addQuality(listens);
  danny.addQuality(patient);
  danny.addQuality(pursues);
  danny.addQuality(supportive);
  danny.addQuality(willingToLove);
  danny.addQuality(joyful);
  danny.addQuality(honesty);
  danny.addQuality(integrity);
  danny.addQuality(loyal);
  danny.addQuality(respectful);
  danny.addQuality(responsible);
  danny.addQuality(spontaneous);
  danny.addQuality(witHumorCharm);




  barry.addQuality(athletic);
  barry.addQuality(cute);
  barry.addQuality(healthy);
  barry.addQuality(physique);
  barry.addQuality(goodConvos);
  barry.addQuality(lifeLearner);
  barry.addQuality(openMinded);
  barry.addQuality(affectionate);
  barry.addQuality(compassionate);
  barry.addQuality(family);
  barry.addQuality(goodWithKids);
  barry.addQuality(kind);
  barry.addQuality(listens);
  barry.addQuality(patient);
  barry.addQuality(supportive);
  barry.addQuality(willingToLove);
  barry.addQuality(aweOfBeauty);
  barry.addQuality(defaultIsLove);
  barry.addQuality(joyful);
  barry.addQuality(growthMindset);
  barry.addQuality(honesty);
  barry.addQuality(humility);
  barry.addQuality(integrity);
  barry.addQuality(loyal);
  barry.addQuality(respectful);
  barry.addQuality(responsible);
  barry.addQuality(committed);
  barry.addQuality(acceptsHelp);
  barry.addQuality(adventurous);
  barry.addQuality(spontaneous);
  barry.addQuality(witHumorCharm);


  var userView = new UserView(katie);
  // var personView = new PersonView(joey);
  // var personView = new PersonView(patrick);
  // var personView = new PersonView(greg);
  // var personView = new PersonView(bill);
  // var personView = new PersonView(danny);
  // var personView = new PersonView(barry);

  // $(".container").append(); // personView
  // $(".container").append(); // qualityView

  userView.render();
  // groceryView.render();

var datasetWord = [cute.descriptiveWord, family.descriptiveWord, goodWithKids.descriptiveWord, cute.descriptiveWord, politicallySimilar.descriptiveWord, affectionate.descriptiveWord, compassionate.descriptiveWord, family.descriptiveWord, goodWithKids.descriptiveWord, willingToLove.descriptiveWord, faith.descriptiveWord, integrity.descriptiveWord, respectful.descriptiveWord, adventurous.descriptiveWord, protective.descriptiveWord, spontaneous.descriptiveWord, witHumorCharm.descriptiveWord, athletic.descriptiveWord, clean.descriptiveWord, cute.descriptiveWord, healthy.descriptiveWord, physique.descriptiveWord, goodConvos.descriptiveWord, lifeLearner.descriptiveWord, openMinded.descriptiveWord, politicallySimilar.descriptiveWord, family.descriptiveWord, goodWithKids.descriptiveWord, kind.descriptiveWord, honesty.descriptiveWord, loyal.descriptiveWord, respectful.descriptiveWord, responsible.descriptiveWord, adventurous.descriptiveWord, dancer.descriptiveWord, protective.descriptiveWord, witHumorCharm.descriptiveWord, cute.descriptiveWord, pursues.descriptiveWord, cute.descriptiveWord, asksQuestions.descriptiveWord, openMinded.descriptiveWord, communicates.descriptiveWord, compassionate.descriptiveWord, kind.descriptiveWord, listens.descriptiveWord, patient.descriptiveWord, pursues.descriptiveWord, supportive.descriptiveWord, willingToLove.descriptiveWord, joyful.descriptiveWord, honesty.descriptiveWord, integrity.descriptiveWord, loyal.descriptiveWord, respectful.descriptiveWord, responsible.descriptiveWord, spontaneous.descriptiveWord, witHumorCharm.descriptiveWord, athletic.descriptiveWord, cute.descriptiveWord, healthy.descriptiveWord, physique.descriptiveWord, goodConvos.descriptiveWord, lifeLearner.descriptiveWord, openMinded.descriptiveWord, affectionate.descriptiveWord, compassionate.descriptiveWord, family.descriptiveWord, goodWithKids.descriptiveWord, kind.descriptiveWord, listens.descriptiveWord, patient.descriptiveWord, supportive.descriptiveWord, willingToLove.descriptiveWord, aweOfBeauty.descriptiveWord, defaultIsLove.descriptiveWord, joyful.descriptiveWord, growthMindset.descriptiveWord, honesty.descriptiveWord, humility.descriptiveWord, integrity.descriptiveWord, loyal.descriptiveWord, respectful.descriptiveWord, responsible.descriptiveWord, committed.descriptiveWord, acceptsHelp.descriptiveWord, adventurous.descriptiveWord, spontaneous.descriptiveWord, witHumorCharm.descriptiveWord]

var datasetCategory = [cute.category, family.category, goodWithKids.category, cute.category, politicallySimilar.category, affectionate.category, compassionate.category, family.category, goodWithKids.category, willingToLove.category, faith.category, integrity.category, respectful.category, adventurous.category, protective.category, spontaneous.category, witHumorCharm.category, athletic.category, clean.category, cute.category, healthy.category, physique.category, goodConvos.category, lifeLearner.category, openMinded.category, politicallySimilar.category, family.category, goodWithKids.category, kind.category, honesty.category, loyal.category, respectful.category, responsible.category, adventurous.category, dancer.category, protective.category, witHumorCharm.category, cute.category, pursues.category, cute.category, asksQuestions.category, openMinded.category, communicates.category, compassionate.category, kind.category, listens.category, patient.category, pursues.category, supportive.category, willingToLove.category, joyful.category, honesty.category, integrity.category, loyal.category, respectful.category, responsible.category, spontaneous.category, witHumorCharm.category, athletic.category, cute.category, healthy.category, physique.category, goodConvos.category, lifeLearner.category, openMinded.category, affectionate.category, compassionate.category, family.category, goodWithKids.category, kind.category, listens.category, patient.category, supportive.category, willingToLove.category, aweOfBeauty.category, defaultIsLove.category, joyful.category, growthMindset.category, honesty.category, humility.category, integrity.category, loyal.category, respectful.category, responsible.category, committed.category, acceptsHelp.category, adventurous.category, spontaneous.category, witHumorCharm.category]

//////////////////// Graph Attempt /////////////////////////////

  // var wordChart = d3.select(".word_chart");
  // var bar = chart.selectAll("div");
  // var barUpdate = bar.data(datasetWord);
  // var barEnter = barUpdate.enter().append("div");
  // barEnter.style("width", function(d) { return d * 10 + "px" });
  // barEnter.text(function(d) { return d; });

  var x = d3.scale.linear()
    .domain([0, d3.max(datasetCategory)])
    .range([0, 420]);

  d3.select(".category_chart")
    .selectAll("div")
      .data(datasetCategory)
    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) {return d; });


//////////////////// Word Cloud? /////////////////////////////
  // var d3 = require("d3"),
  //     cloud = require("../");

  // var cloud = d3.layout.cloud();

  // var fill = d3.scale.category20();

  // var layout = cloud()
  //     .size([500, 500])
  //     .words([
  //       "Hello", "world", "normally", "you", "want", "more", "words",
  //       "than", "this"].map(function(d) {
  //       return {text: d, size: 10 + Math.random() * 90, test: "haha"};
  //     }))
  //     .padding(5)
  //     .rotate(function() { return ~~(Math.random() * 2) * 90; })
  //     .font("Impact")
  //     .fontSize(function(d) { return d.size; })
  //     .on("end", draw);

  // layout.start();

  // function draw(words) {
  //   d3.select("body").append("svg")
  //       .attr("width", layout.size()[0])
  //       .attr("height", layout.size()[1])
  //     .append("g")
  //       .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
  //     .selectAll("text")
  //       .data(words)
  //     .enter().append("text")
  //       .style("font-size", function(d) { return d.size + "px"; })
  //       .style("font-family", "Impact")
  //       .style("fill", function(d, i) { return fill(i); })
  //       .attr("text-anchor", "middle")
  //       .attr("transform", function(d) {
  //         return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
  //       })
  //       .text(function(d) { return d.text; });
  // }



})



  // d3.select("body")
  //   .style("color", "black")
  //   .style("background-color", "white");
  // var div = $("body").append("div");
  // div.html("Hello World!");