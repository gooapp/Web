import React, { Component } from 'react'
import './protocol.css';

class Bqbhzy extends Component
{
    render()
    {
        let name = this.props.match.params.name;
        if (!name)
        {
            name = "本App"
        }

        return (
            <div className="text_div">
                <h3>版权保护指引</h3>
                <p>{name}作为网络服务提供者，为有效保护权利人，对于其中可能涉嫌侵犯权利人合法权益的信息，根据相关法律法规，特制定本指引。如果您作为权利人认为{name}平台上的信息侵犯了您的合法权益，您可依据本指引通知我们，我们将依法处理。</p>
                <h4>一、通知流程</h4>
                <p>权利人认为{name}平台上的某些内容涉嫌侵犯其合法权益，可向{name}发出书面投诉通知。投诉通知须包含以下内容：</p>
                <h5>1.1权利人主体信息和相关证明材料</h5>
                <p>1.1.1个人投诉： 权利人的真实姓名、联系电话及邮箱、联系地址、身份证（中国公民）或护照（外国公民）的照片或扫描件等。<br />1.1.2单位投诉： 权利人的名称、住所地、联系人、联系电话及邮箱、投诉通知（加盖公章）、营业执照（加盖公章）等。<br />1.1.3代他人投诉： 除上述（1）（2）中要求的投诉人和权利人双方的主体身份信息和证明材料外，还需提供权利人签名或盖章的委托书。</p>
                <h5>1.2 投诉内容</h5>
                <p>1.2.1被投诉内容的完整标题/名称和网络地址、所在位置描述等足以准确定位侵权内容的相关信息。<br />1.2.2被投诉内容侵犯的权利类型（如：信息网络传播权、名誉权、肖像权等）。<br />1.2.3权利人需要明确要求断开链接的准确网络地址。</p>
                <h5>1.3 构成侵权的初步证明材料</h5>
                <p>1.3.1著作权侵权投诉<br />（1）著作权权属证明材料：包括但不限于版权证书、商标权证书、专利权证书、作品首次公开发表或发行日期证明材料、创作手稿、经权威机构签发的作品创作时间戳、作品备案证书等。<br />（2）被投诉内容构成侵权的证明材料：包括但不限于被投诉内容构成对权利人版权、商标权或专利权等权利侵权的有效证明材料。<br />1.3.2其他权利侵权投诉<br />（1）指明被投诉信息中具体哪些内容涉嫌侵犯权利人的何种权益及相关法律规定。<br />（2）构成侵权的事实和详细理由说明。</p>
                <h5>1.4 权利人保证</h5>
                <p>权利人应在通知书中保证：权利人在通知书中的陈述和所提供材料皆是真实、有效和合法的，保证承担和赔偿{name}因根据权利人通知书对被投诉内容进行处理而遭受的全部损失。</p>
                <h5>1.5、{name}的处理 </h5>
                <p>1.5.1 {name}收到权利人符合本指引要求的投诉通知后，会尽快依法对被投诉内容做删除或断开链接等处理。<br />1.5.2 对不符合本指引要求的投诉通知，{name}有权在权利人补正前暂不处理。<br />1.5.3 对于侵犯权利人信息网络传播权的投诉通知，{name}在进行处理投诉的同时可依法将投诉通知转送服务对象。</p>
                <h4>二、反通知流程</h4>
                <p>{name}根据权利通知移除相关链接或内容的，上述链接或内容的网络服务提供商有权依据法律、法规的规定，向{name}发出关于被移除内容不侵犯著作权的反通知。在收到反通知后，{name}可以恢复被移除的内容，且依法对该恢复行为不承担法律责任。</p>
                <h5>2.1反通知人主体信息和相关证明材料</h5>
                <p>2.1.1个人： 权利人的真实姓名、联系电话及邮箱、联系地址、身份证（中国公民）或护照（外国公民）的照片或扫描件等。<br />2.1.2单位： 权利人的名称、住所地、联系人、联系电话及邮箱、投诉通知（加盖公章）、营业执照（加盖公章）等。</p>
                <h5>2.2反通知内容</h5>
                <p>2.2.1反通知内容的完整标题/名称和网络地址、所在位置描述等足以准确定位侵权内容的相关信息。<br />2.2.2反通知内容的权利类型（如：信息网络传播权、著作权、名誉权、肖像权等）。<br />2.2.3反通知人需要明确要求恢复链接的准确网络地址。</p>
                <h5>2.3不构成侵权的初步证明材料</h5>
                <p>2.3.1著作权层面证明材料：包括但不限于版权证书、商标权证书、专利权证书、作品首次公开发表或发行日期证明材料、创作手稿、经权威机构签发的作品创作时间戳、作品备案证书等。</p>
                <h5>2.4声明和保证</h5>
                <p>反通知人应保证反通知书中的陈述及提供的材料，均为真实、合法、有效，并保证承担由此产生的全部法律责任。</p>
                <h5>2.5{name}的处理</h5>
                <p>{name}在收到反通知书后，有权恢复被删除的作品或者被断开的作品链接，同时将反通知转送权利人，权利人不得再通知{name}删除该作品或者断开该作品的链接。</p>
                <h4>三、注意事项</h4>
                <p>3.1权利人应提供经签章或签名的书面通知书及相关证明材料的扫描件。为确保权利人提供相关材料的真实性和有效性，{name}认为必要时，可要求您提供上述材料的原件，届时还请配合提供。</p>
                <p>3.2若权利人确有合理理由不能提供证明材料原件的，应提供其复印件（复印件上应有权利人签章或签名）。</p>
                <p>3.3若证明材料是在外国或港澳台地区形成的，应按照法律规定在所在国家或地区进行公证认证或其他法律要求的证明程序。</p>
                <p>3.4若权利人已经对被投诉人提起行政或司法争议解决程序的，请将通知书和相关受理证明、提交给争议解决机构的证据一并提交{name}，这将有利于对投诉的处理。</p>
                <h4>四、通知方式</h4>
                <p>投诉发送到 shimengnandx@163.com 邮箱。</p>
                <div className="text-align-right">
                    <h5>{name}</h5>
                    <h5> 2019年5月</h5>
                </div>
            </div>
        );
    }
}

export default Bqbhzy;