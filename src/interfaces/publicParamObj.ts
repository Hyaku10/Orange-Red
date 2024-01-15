export default interface IpublicParamObj {
    image : string,
    name : string,

    SPEED : number, 
    SIZE : number, 
    CIRCLE : boolean,
    BORDER : number,
    ANGLE : number,
    GREYSCALE : boolean,

    //OSCILLATE (boolean)
    oscillate_size : boolean,
    oscillate_speed : boolean,
    oscillate_angle : boolean,

    //CHANGE RATE (num)
    RGB_change_rate : number, 
    size_change_rate : number,
    speed_change_rate : number,
    angle_change_rate : number,

    //MAX MIN (num)
    max_size : number, 
    min_size : number,
    max_speed : number, 
    min_speed : number, 
    max_angle: number,
    min_angle : number

}