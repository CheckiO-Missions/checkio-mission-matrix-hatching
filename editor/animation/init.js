requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function matrixHatchingAnimation(tgt_node, data) {

            if (!data || !data.ext) {
                return
            }

            const input = data.in[0]

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                grid: {
                    'stroke-width': '0.5px',
                    'stroke': '#294270',
                },
                diagonal_line: [
                    {
                        'stroke-width': '1px',
                        'stroke': '#ffc965',
                    },
                    {
                        'stroke-width': '1px',
                        'stroke': '#8fc7ed',
                    },

                ],
                frame: {
                    'stroke-width': '15px',
                    'stroke': '#c9ebfb',
                },
                number: {
                    'font-family': 'times',
                    'font-weight': 'bold',
                    'stroke-width': 0,
                    'fill': '#294270',
                },
            }

            /*----------------------------------------------*
             *
             * values
             *
             *----------------------------------------------*/
            const grid_size_px = 200
            const os = 15
            const cols = input[0].length
            const rows = input.length
            const unit = 200 / Math.max(cols, rows)

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const paper = Raphael(tgt_node, unit * cols + os*2, unit * rows + +os*2, 0, 0)

            /*----------------------------------------------*
             *
             * draw diagonal line
             *
             *----------------------------------------------*/
            const diagonal_width = Math.sqrt(((unit/2)**2)*2)  +'px'
            attr.diagonal_line[0]['stroke-width'] = diagonal_width
            attr.diagonal_line[1]['stroke-width'] = diagonal_width
            for (let i = 0; i < cols+rows+2; i += 1) {
                paper.path(
                    [
                        'M', os-unit,               os+ i*unit,
                        'l', unit + i*unit + unit,  -(unit + i*unit + unit)
                    ]
                ).attr(attr.diagonal_line[i % 2])
            }

            /*----------------------------------------------*
             *
             * draw frame
             *
             *----------------------------------------------*/
            paper.rect(os/2, os/2, unit*cols + os, unit*rows + os).attr(attr.frame)

            /*----------------------------------------------*
             *
             * draw grid
             *
             *----------------------------------------------*/
            // horizontal
            for (let i = 0; i <= rows; i += 1) {
                paper.path(['M', os, os+ i*unit, 'h', unit*cols]).attr(attr.grid)
            }
            // vertical
            for (let j = 0; j <= cols; j += 1) {
                paper.path(['M', os+ j*unit, os, 'v', unit*rows]).attr(attr.grid)
            }

            /*----------------------------------------------*
             *
             * draw number
             *
             *----------------------------------------------*/
            attr.number['font-size'] = 70 * (unit/200) +'px'
            for (let i = 0; i < rows; i += 1) {
                for (let j = 0; j < cols; j += 1) {
                    paper.text(os+(unit*(j+0.5)), os+(unit*(i+0.5)), input[i][j]).attr(attr.number)
                }
            }
        }

        var io = new extIO({
            animation: function($expl, data){
                matrixHatchingAnimation(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
