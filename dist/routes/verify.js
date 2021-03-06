const jwt = require('jsonwebtoken');
module.exports.auth = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token)
        return res.status(403).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        next();
    }
    catch (_a) {
        res.status(400).send("Invalid token");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy92ZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRTFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXpELElBQUk7UUFDRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLElBQUksRUFBRSxDQUFDO0tBQ1Q7SUFBQyxXQUFNO1FBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDeEM7QUFDSixDQUFDLENBQUEifQ==