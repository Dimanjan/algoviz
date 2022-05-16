function draw_treemap(treeData){
var width = SETTINGS.width - SETTINGS.margin.left - SETTINGS.margin.right,
    height = SETTINGS.height - SETTINGS.margin.top - SETTINGS.margin.bottom;

var treemap = d3.tree()
    .size([width, height]);

var nodes = d3.hierarchy(treeData);

nodes = treemap(nodes);

var svg = d3.select("body").select("svg")
      .attr("width", width + SETTINGS.margin.left + SETTINGS.margin.right)
      .attr("height", height + SETTINGS.margin.top + SETTINGS.margin.bottom),
    g = svg.append("g")
      .attr("transform",
            "translate(" + SETTINGS.margin.left *1.4 + "," + SETTINGS.margin.top + ")");

var link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
  .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
       return "M" + d.x + "," + d.y
         + "C" + d.x + "," + (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," + d.parent.y;
       });

var node = g.selectAll(".node")
    .data(nodes.descendants())
  .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; });

node.append("circle")
    .attr("id", function(d) { return d.data.id; })
  .attr("r", 10)
  .style('fill', '#ffffff');

}

draw_treemap(treeData);